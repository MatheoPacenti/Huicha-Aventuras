import { PartialType } from '@nestjs/mapped-types';
import { CreateActividadeDto } from './create-actividade.dto';

export class UpdateActividadeDto extends PartialType(CreateActividadeDto) {}
