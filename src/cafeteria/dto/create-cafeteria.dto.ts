import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCafeteriaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}