import { Module } from '@nestjs/common';
import { RolpermisoService } from '../src/rolpermiso/rolpermiso.service';
import { RolpermisoController } from './rolpermiso.controller';

@Module({
  controllers: [RolpermisoController],
  providers: [RolpermisoService],
})
export class RolpermisoModule {}
