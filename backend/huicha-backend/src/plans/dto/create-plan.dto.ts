
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePlanDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  @IsOptional()
  duracion: number;

  @IsNumber()
  @IsOptional()
  capacidad: number;

  @IsNumber()
  @IsOptional()
  precio: number;
}