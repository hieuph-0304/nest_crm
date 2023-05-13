import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGaurd } from './local-auth.gaurd';
import { AuthService } from './auth.service';
import { JwtAuthGaurd } from './jwt-auth.gaurd';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(LocalAuthGaurd)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGaurd)
  @Get('protected')
  async protected(@Request() req) { // TODO: require an Beaber token, validate token
    return req.user;
  }
}
