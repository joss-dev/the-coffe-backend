import { Module } from '@nestjs/common';
import { CafeteriaService } from './cafeteria.service';
import { CafeteriaController } from './cafeteria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cafeteria } from './entities/cafeteria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cafeteria])],
  providers: [CafeteriaService],
  controllers: [CafeteriaController],
  exports: [TypeOrmModule, CafeteriaService],
})
export class CafeteriaModule {}