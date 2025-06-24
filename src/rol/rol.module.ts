import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  providers: [RolService],
  controllers: [RolController],
  exports: [TypeOrmModule, RolService],
})
export class RolModule {}
