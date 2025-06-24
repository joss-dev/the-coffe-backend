import { Module } from '@nestjs/common';
import { SalaService } from '../src/sala/sala.service';
import { SalaController } from './sala.controller';

@Module({
  controllers: [SalaController],
  providers: [SalaService],
})
export class SalaModule {}
