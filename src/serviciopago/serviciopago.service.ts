import { Injectable } from '@nestjs/common';
import { CreateServiciopagoDto } from '../../serviciopago/dto/create-serviciopago.dto';
import { UpdateServiciopagoDto } from '../../serviciopago/dto/update-serviciopago.dto';

@Injectable()
export class ServiciopagoService {
  create(createServiciopagoDto: CreateServiciopagoDto) {
    return 'This action adds a new serviciopago';
  }

  findAll() {
    return `This action returns all serviciopago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviciopago`;
  }

  update(id: number, updateServiciopagoDto: UpdateServiciopagoDto) {
    return `This action updates a #${id} serviciopago`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviciopago`;
  }
}
