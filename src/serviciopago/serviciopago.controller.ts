import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiciopagoService } from './serviciopago.service';
import { CreateServiciopagoDto } from '../../serviciopago/dto/create-serviciopago.dto';
import { UpdateServiciopagoDto } from '../../serviciopago/dto/update-serviciopago.dto';

@Controller('serviciopago')
export class ServiciopagoController {
  constructor(private readonly serviciopagoService: ServiciopagoService) {}

  @Post()
  create(@Body() createServiciopagoDto: CreateServiciopagoDto) {
    return this.serviciopagoService.create(createServiciopagoDto);
  }

  @Get()
  findAll() {
    return this.serviciopagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviciopagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiciopagoDto: UpdateServiciopagoDto) {
    return this.serviciopagoService.update(+id, updateServiciopagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviciopagoService.remove(+id);
  }
}
