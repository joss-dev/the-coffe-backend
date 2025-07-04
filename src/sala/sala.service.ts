import { Injectable } from '@nestjs/common';
import { CreateSalaDto } from '../../sala/dto/create-sala.dto';
import { UpdateSalaDto } from '../../sala/dto/update-sala.dto';

@Injectable()
export class SalaService {
  create(createSalaDto: CreateSalaDto) {
    return 'This action adds a new sala';
  }

  findAll() {
    return `This action returns all sala`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sala`;
  }

  update(id: number, updateSalaDto: UpdateSalaDto) {
    return `This action updates a #${id} sala`;
  }

  remove(id: number) {
    return `This action removes a #${id} sala`;
  }
}
