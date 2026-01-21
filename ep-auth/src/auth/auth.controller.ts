import { Body, Controller, Get, Post } from '@nestjs/common';
import type { LoginDto } from './dto/login.dto.ts';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('/login')
  login(@Body() loginDto: LoginDto): string {
    return this.authService.login(loginDto);
  }
}
