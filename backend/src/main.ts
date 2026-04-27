import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(bodyParser.json());
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
