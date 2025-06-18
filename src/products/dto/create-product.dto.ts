import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsPositive,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsInt()
  @Min(0)
  quantity: number;

  @IsString()
  @IsNotEmpty()
  inventoryStatus: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  rating?: number;
}
