import { PartialType } from '@nestjs/mapped-types';
import { CreateServiciopagoDto } from './create-serviciopago.dto';

export class UpdateServiciopagoDto extends PartialType(CreateServiciopagoDto) {}
