import { Module } from '@nestjs/common';
import { ClienteService } from '../cliente/cliente.service';
import { ClienteController } from './cliente.controller';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
