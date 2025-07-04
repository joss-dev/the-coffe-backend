import { Module } from '@nestjs/common';
import { PedidoService } from '../src/pedido/pedido.service';
import { PedidoController } from './pedido.controller';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
