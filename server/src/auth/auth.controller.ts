import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from 'utils/Guards';

@Controller('auth')
export class AuthController {
  @Get('google-login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return {msg:'Login endpoint'};
  }
  //"http://localhost:3000/auth/google-redirect"
  @Get('google-redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return 'Redirect endpoint';
  }
}
