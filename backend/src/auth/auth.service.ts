import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { compareSync, hashSync } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@/rest/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}
  async register(userObj: RegisterAuthDto) {
    const { password } = userObj;
    var hash = hashSync(password, 10);
    userObj = { ...userObj, password: hash };
    return await this.userService.create(userObj);
  }

  async login(userObj: LoginAuthDto) {
    const { password, email } = userObj;
    const user = await this.userService.findByEmail(email);
    if (!user) throw new HttpException('USER_NOT_FOUND', 404);
    const match = compareSync(password, user.password);
    if (!match) throw new HttpException('PASSWORD_INVALID', 403);
    const data = {
      user,
      token: this.jwtService.sign({
        id: user.id,
        email: user.email,
        name: user.name,
      }),
    };
    return data;
  }
}
