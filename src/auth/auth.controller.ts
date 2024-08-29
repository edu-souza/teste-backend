import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
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
  refresh(@Body() body: { refresh_token: string }) {
    console.log('TESTE' + this.authService.refreshToken(body.refresh_token));
    return this.authService.refreshToken(body.refresh_token);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
