import {
  IsOptional,
  IsPositive,
  IsInt,
  IsString,
  IsBooleanString,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  rows?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  first?: number;

  @IsArray()
  @IsOptional()
  @Type(() => Number)
  @IsInt({ each: true })
  categories?: number[];

  @IsOptional()
  @IsBooleanString()
  status?: string;

  @IsOptional()
  @IsString()
  search?: string;
}
