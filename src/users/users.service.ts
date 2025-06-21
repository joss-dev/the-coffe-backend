import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  findOneByEmailWithPassword(email: string) {
    return this.usersRepository.findOne({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });
  }

  findOneByUserName(name: string) {
    return this.usersRepository.findOne({ where: { name } });
  }

  findAll() {
    return this.usersRepository.find();
  }
}
