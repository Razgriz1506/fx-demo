import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  private users = [
    {
      id: '1',
      name: 'Demo User',
      email: 'demo@bank.com',
      password_hash: bcrypt.hashSync('demo123', 10),
    },
  ];

  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = this.users.find((u) => u.email === email);
    if (!user) throw new UnauthorizedException();

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) throw new UnauthorizedException();

    return user;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}