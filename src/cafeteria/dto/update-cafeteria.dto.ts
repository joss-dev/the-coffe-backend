import { PartialType } from '@nestjs/mapped-types';
import { CreateCafeteriaDto } from './create-cafeteria.dto';

export class UpdateCafeteriaDto extends PartialType(CreateCafeteriaDto) {}