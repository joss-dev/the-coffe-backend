import { Injectable } from '@nestjs/common';
import { CreateRolpermisoDto } from '../../rolpermiso/dto/create-rolpermiso.dto';
import { UpdateRolpermisoDto } from '../../rolpermiso/dto/update-rolpermiso.dto';

@Injectable()
export class RolpermisoService {
  create(createRolpermisoDto: CreateRolpermisoDto) {
    return 'This action adds a new rolpermiso';
  }

  findAll() {
    return `This action returns all rolpermiso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolpermiso`;
  }

  update(id: number, updateRolpermisoDto: UpdateRolpermisoDto) {
    return `This action updates a #${id} rolpermiso`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolpermiso`;
  }
}
