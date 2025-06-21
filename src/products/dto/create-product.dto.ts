import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
  isNumber,
  isPositive,
  IsBoolean,
} from 'class-validator';

export class CreateProductDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  codigo?: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  imagen?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  precio: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  costo?: number;

  @IsInt()
  @IsPositive()
  categoria_id: number;

  @IsBoolean()
  @IsNotEmpty()
  activo: boolean;

  @IsOptional()
  created_at?: Date;
}
