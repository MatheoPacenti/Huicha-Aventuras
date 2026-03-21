import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jornada } from '../jornadas/entities/jornada.entity';
import { PlansController } from './plans.controller';
import { Plan } from './plans.entity';
import { PlansService } from './plans.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plan, Jornada])],
  controllers: [PlansController],
  providers: [PlansService],
})
export class PlansModule {}