import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallepedidoDto } from './create-detallepedido.dto';

export class UpdateDetallepedidoDto extends PartialType(CreateDetallepedidoDto) {}
