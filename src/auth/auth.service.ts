import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/usuario/hash.service';

@Injectable()
export class AuthService {
  
  constructor(
    private usersService: UsuarioService,
    private jwtService: JwtService,
    private hashService: HashService,
  ) {}

  async signIn(email: string, pass: string,): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);

    // Comparando a senha fornecida com a senha armazenada (criptografada)
    const isPasswordValid = await this.hashService.comparePasswords(pass, user?.senha);

    // console.log('Senha fornecida:', pass);
    // console.log('Hash armazenado:', user?.senha);
    // console.log('Resultado da comparação:', isPasswordValid);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, nome: user.nome, email: user.email, acesso: user.acesso };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}