import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetallepedidoService } from '../detallepedido/detallepedido.service';
import { CreateDetallepedidoDto } from './dto/create-detallepedido.dto';
import { UpdateDetallepedidoDto } from './dto/update-detallepedido.dto';

@Controller('detallepedido')
export class DetallepedidoController {
  constructor(private readonly detallepedidoService: DetallepedidoService) {}

  @Post()
  create(@Body() createDetallepedidoDto: CreateDetallepedidoDto) {
    return this.detallepedidoService.create(createDetallepedidoDto);
  }

  @Get()
  findAll() {
    return this.detallepedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallepedidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallepedidoDto: UpdateDetallepedidoDto) {
    return this.detallepedidoService.update(+id, updateDetallepedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallepedidoService.remove(+id);
  }
}
