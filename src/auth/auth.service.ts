  import { Injectable, UnauthorizedException } from '@nestjs/common';
  import { UsuarioService } from 'src/usuario/usuario.service';
  import { JwtService } from '@nestjs/jwt';
  import { HashService } from 'src/usuario/hash.service';
  import { jwtConstants } from './constants';

  @Injectable()
  export class AuthService {

    constructor(
      private usersService: UsuarioService,
      private jwtService: JwtService,
      private hashService: HashService,
    ) {}

    async signIn(email: string, pass: string): Promise<{ access_token: string, refresh_token: string }> {
      const user = await this.usersService.findByEmail(email);
      if (!user || !(await this.hashService.comparePasswords(pass, user?.senha))) {
        throw new UnauthorizedException('Credenciais inválidas');
      }

      const payload = { sub: user.id, email: user.email };
      const access_token = await this.jwtService.signAsync(payload, { expiresIn: '1m' });
      const refresh_token = await this.jwtService.signAsync(payload, { expiresIn: '2m' });

      // Aqui, salve o refresh_token no banco de dados associado ao usuário
      await this.usersService.saveRefreshToken(user.id, refresh_token);

      return {
        access_token,
        refresh_token,
      };
    }

    async refreshToken(refreshToken: string): Promise<{ access_token: string }> {
      try {
        const payload = await this.jwtService.verifyAsync(refreshToken, { secret: jwtConstants.secret });
        const user = await this.usersService.findById(payload.sub);

        if (!user || refreshToken !== user.refreshToken) {
          throw new UnauthorizedException('Refresh token inválido');
        }

        const access_token = await this.jwtService.signAsync({ sub: payload.sub, email: payload.email }, { expiresIn: '1m' });
        return { access_token };
      } catch (err) {
        throw new UnauthorizedException('Invalid refresh token');
      }
    }
  }
