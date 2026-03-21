import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividade } from '../actividades/entities/actividade.entity';
import { Plan } from '../plans/plans.entity';
import { Reserva } from './entities/reserva.entity';
import { ReservasController } from './reservas.controller';
import { ReservasService } from './reservas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, Actividade, Plan])],
  controllers: [ReservasController],
  providers: [ReservasService],
})
export class ReservasModule {}
