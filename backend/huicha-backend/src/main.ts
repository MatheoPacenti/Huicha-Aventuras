import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // ✅ Habilita CORS para que el frontend (React) pueda consumir la API
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
