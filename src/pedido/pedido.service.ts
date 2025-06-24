import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from '../../pedido/dto/create-pedido.dto';
import { UpdatePedidoDto } from '../../pedido/dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  create(createPedidoDto: CreatePedidoDto) {
    return 'This action adds a new pedido';
  }

  findAll() {
    return `This action returns all pedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
