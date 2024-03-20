import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compareSync, hashSync } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private repository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async register(userObj: RegisterAuthDto) {
    const { password } = userObj;
    var hash = hashSync(password, 10);
    userObj = { ...userObj, password: hash };
    const user = this.repository.create(userObj);
    return await this.repository.save(user);
  }

  async login(userObj: LoginAuthDto) {
    const { password, email } = userObj;
    const user = await this.repository.findOne({ where: { email } });
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
