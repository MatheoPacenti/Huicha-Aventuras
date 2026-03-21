import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadesModule } from './actividades/actividades.module';
import { AppController } from './app.controller';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { JornadasModule } from './jornadas/jornadas.module';
import { PlansModule } from './plans/plans.module';
import { ReservasModule } from './reservas/reservas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'matheo',
      password: 'Kilomono001',
      database: 'huicha',
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Temporal para crear tabla reserva_actividades
    }),
    UsersModule,
    PlansModule,
    JornadasModule,
    ActividadesModule,
    ReservasModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [],

})
export class AppModule {}
