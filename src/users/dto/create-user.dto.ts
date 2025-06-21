import { IsString, IsEmail, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @Transform(({ value }: { value: string }) => value.trim())
  @IsString()
  @MinLength(3, {
    message: 'El nombre debe tener al menos 3 caracteres',
  })
  name: string;

  @Transform(({ value }: { value: string }) => value.trim())
  @IsEmail({}, { message: 'El email no es válido' })
  email: string;

  @Transform(({ value }: { value: string }) => value.trim())
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
