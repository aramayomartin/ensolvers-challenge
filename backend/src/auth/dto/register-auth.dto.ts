import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends LoginAuthDto {
  @IsNotEmpty()
  name: string;
}
