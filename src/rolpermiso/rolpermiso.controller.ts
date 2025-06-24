import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolpermisoService } from './rolpermiso.service';
import { CreateRolpermisoDto } from '../../rolpermiso/dto/create-rolpermiso.dto';
import { UpdateRolpermisoDto } from '../../rolpermiso/dto/update-rolpermiso.dto';

@Controller('rolpermiso')
export class RolpermisoController {
  constructor(private readonly rolpermisoService: RolpermisoService) {}

  @Post()
  create(@Body() createRolpermisoDto: CreateRolpermisoDto) {
    return this.rolpermisoService.create(createRolpermisoDto);
  }

  @Get()
  findAll() {
    return this.rolpermisoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolpermisoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolpermisoDto: UpdateRolpermisoDto) {
    return this.rolpermisoService.update(+id, updateRolpermisoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolpermisoService.remove(+id);
  }
}
