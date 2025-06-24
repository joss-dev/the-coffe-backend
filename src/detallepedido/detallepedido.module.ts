import { Module } from '@nestjs/common';
import { DetallepedidoService } from './detallepedido.service';
import { DetallepedidoController } from './../detallepedido/detallepedido.controller';

@Module({
  controllers: [DetallepedidoController],
  providers: [DetallepedidoService],
})
export class DetallepedidoModule {}
