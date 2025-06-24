import { Injectable } from '@nestjs/common';
import { CreateDetallepedidoDto } from './../detallepedido/dto/create-detallepedido.dto';
import { UpdateDetallepedidoDto } from './../detallepedido/dto/update-detallepedido.dto';

@Injectable()
export class DetallepedidoService {
  create(createDetallepedidoDto: CreateDetallepedidoDto) {
    return 'This action adds a new detallepedido';
  }

  findAll() {
    return `This action returns all detallepedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detallepedido`;
  }

  update(id: number, updateDetallepedidoDto: UpdateDetallepedidoDto) {
    return `This action updates a #${id} detallepedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallepedido`;
  }
}
