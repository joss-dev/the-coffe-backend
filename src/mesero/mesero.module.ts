import { Module } from '@nestjs/common';
import { MeseroService } from '../src/mesero/mesero.service';
import { MeseroController } from './mesero.controller';

@Module({
  controllers: [MeseroController],
  providers: [MeseroService],
})
export class MeseroModule {}
