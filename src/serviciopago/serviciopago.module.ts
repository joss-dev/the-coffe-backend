import { Module } from '@nestjs/common';
import { ServiciopagoService } from '../src/serviciopago/serviciopago.service';
import { ServiciopagoController } from './serviciopago.controller';

@Module({
  controllers: [ServiciopagoController],
  providers: [ServiciopagoService],
})
export class ServiciopagoModule {}
