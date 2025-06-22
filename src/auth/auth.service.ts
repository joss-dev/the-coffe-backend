import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(LoginUserDto: LoginUserDto) {
    const user = await this.usersService.findOneByEmailWithPassword(
      LoginUserDto.email,
    );
    if (!user) {
      throw new BadRequestException('Credenciales inválidas');
    }

    const isPasswordValid: boolean = await bcrypt.compare(
      LoginUserDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    const payload = { sub: user.id };

    const token = await this.jwtService.signAsync(payload);

    user.last_login = new Date();
    await this.usersService.update(user.id, user);

    return { message: 'Login successful', token, user };
  }

  async register(createUserDto: RegisterUserDto) {
    const existingEmail = await this.usersService.findOneByEmail(
      createUserDto.email,
    );
    if (existingEmail) {
      throw new BadRequestException('El email ya esta registrado');
    }

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const userCreated = await this.usersService.create(createUserDto);
    const { id, email } = userCreated;
    return {
      message: 'Usuario creado exitosamente',
      user: { id, email },
    };
  }
}
