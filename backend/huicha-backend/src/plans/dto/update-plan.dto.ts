import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePlanDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @IsOptional()
  duracion?: number;

  @IsNumber()
  @IsOptional()
  capacidad?: number;

  @IsNumber()
  @IsOptional()
  precio?: number;
}