import { Module } from '@nestjs/common';
import { ServicioService } from '../src/servicio/servicio.service';
import { ServicioController } from './servicio.controller';

@Module({
  controllers: [ServicioController],
  providers: [ServicioService],
})
export class ServicioModule {}
