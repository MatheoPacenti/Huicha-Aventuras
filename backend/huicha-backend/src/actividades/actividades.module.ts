import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadesController } from './actividades.controller';
import { ActividadesService } from './actividades.service';
import { Actividade } from './entities/actividade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actividade])],
  controllers: [ActividadesController],
  providers: [ActividadesService],
})
export class ActividadesModule {}
