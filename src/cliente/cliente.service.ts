import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './../cliente/dto/create-cliente.dto';
import { UpdateClienteDto } from './../cliente/dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  create(createClienteDto: CreateClienteDto) {
    return 'This action adds a new cliente';
  }

  findAll() {
    return `This action returns all cliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
