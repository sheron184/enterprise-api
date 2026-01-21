import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto): string {
    const { username } = loginDto;
    return `User ${username} logged in successfully`;
  }
}
