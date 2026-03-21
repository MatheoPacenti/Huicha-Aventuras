import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from '../plans/plans.entity';
import { Jornada } from './entities/jornada.entity';
import { JornadasController } from './jornadas.controller';
import { JornadasService } from './jornadas.service';
@Module({
  imports: [TypeOrmModule.forFeature([Jornada, Plan])],
  controllers: [JornadasController],
  providers: [JornadasService],
  exports: [TypeOrmModule],
})
export class JornadasModule {}