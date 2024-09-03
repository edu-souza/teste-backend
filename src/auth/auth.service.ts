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
    console.log('Tentando fazer login com o e-mail:', email);

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      console.error('Usuário não encontrado');
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const passwordMatch = await this.hashService.comparePasswords(pass, user.senha);
    if (!passwordMatch) {
      console.error('Senha não confere');
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, nome: user.nome, email: user.email, acesso: user.acesso };
    console.log('Payload gerado para os tokens:', payload);

    const access_token = await this.jwtService.signAsync(payload, { expiresIn: '10s' });
    const refresh_token = await this.jwtService.signAsync(payload, { expiresIn: '30s' });

    console.log('Tokens gerados:', { access_token, refresh_token });

    // Aqui, salve o refresh_token no banco de dados associado ao usuário
    await this.usersService.saveRefreshToken(user.id, refresh_token);

    return {
      access_token,
      refresh_token,
    };
  }

  async refreshToken(refreshToken: string): Promise<{ access_token: string }> {
    console.log('Tentando renovar o token:', refreshToken);
  
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken, { secret: jwtConstants.secret });
      console.log('Payload do token:', payload);
  
      const user = await this.usersService.findById(payload.sub);
      console.log('Usuário recuperado do banco de dados:', user);
  
      if (!user) {
        console.error('Usuário não encontrado');
        throw new UnauthorizedException('Refresh token inválido');
      }
      
      if (refreshToken !== user.refreshToken) {
        console.error('Refresh token não corresponde ao token armazenado');
        throw new UnauthorizedException('Refresh token inválido');
      }
  
      const access_token = await this.jwtService.signAsync({ sub: payload.sub, email: payload.email }, { expiresIn: '10s' });
      console.log('Novo access token gerado:', access_token);
  
      return { access_token };
    } catch (err) {
      console.error('Erro ao verificar o refresh token:', err.message);
      if (err.name === 'TokenExpiredError') {
        console.error('Token expirado em:', err.expiredAt);
        throw new UnauthorizedException('O refresh token expirou, faça login novamente.');
      }
      throw new UnauthorizedException('Refresh token inválido');
    }
  }
}
