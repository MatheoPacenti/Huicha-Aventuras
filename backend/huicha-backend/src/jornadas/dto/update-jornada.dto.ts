import { PartialType } from '@nestjs/mapped-types';
import { CreateJornadaDto } from './create-jornada.dto';

export class UpdateJornadaDto extends PartialType(CreateJornadaDto) {}
