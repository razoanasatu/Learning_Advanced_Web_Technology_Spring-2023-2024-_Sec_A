import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Get()
  getAll() {
    return 'This is the login page';
  }
  @Post('auth')
  async login(@Body() loginData: { email: string; password: string }) {
    return this.loginService.login(loginData);
  }
}
