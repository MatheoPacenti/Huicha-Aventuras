import { IsArray, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { EstadoReserva } from '../entities/reserva.entity';

export class CreateReservaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsDateString()
  fecha: string; // ISO string

  @IsOptional()
  @IsNumber()
  planId?: number;

  @IsOptional()
  @IsString()
  duracion?: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  profesores: string;

  @IsOptional()
  @IsEnum(EstadoReserva)
  estado?: EstadoReserva;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  actividades: number[]; // Array de IDs de actividades
}
