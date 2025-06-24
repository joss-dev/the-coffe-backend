import { Get, Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository } from 'typeorm';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolService {
  constructor(
      @InjectRepository(Rol)
      private rolRepository: Repository<Rol>,
    ) {}
  async findRolAdmin() {
    const rol = await this.rolRepository.findOne({where: {nombre: 'admin'}})
    return rol;
  }
  create(createRolDto: CreateRolDto) {
    return 'This action adds a new rol';
  }

  findAll() {
    return `This action returns all rol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rol`;
  }

  update(id: number, updateRolDto: UpdateRolDto) {
    return `This action updates a #${id} rol`;
  }

  remove(id: number) {
    return `This action removes a #${id} rol`;
  }
}
