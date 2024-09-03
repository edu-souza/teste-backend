import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './auth.metadata';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  async refresh(@Body() body: { refresh_token: string }) {
    try {
      return await this.authService.refreshtoken(body.refresh_token);
    } catch (error) {
      console.error('Erro ao tentar renovar o token:', error.message);
      // Retorne uma resposta 401 para indicar que o token expirou
      throw new UnauthorizedException('O refresh token expirou, faça login novamente.');
    }
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
