import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppExceptionFilter, ExceptionInterceptor } from 'nestjs-error-handler';
import { Logger } from '@nestjs/common';
import { HTTP_STATUS, TIME_ZONE } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AppExceptionFilter(new Logger(), HTTP_STATUS, TIME_ZONE.ASIA_TOKYO));
  app.useGlobalInterceptors(new ExceptionInterceptor());

  await app.listen(3000);
}
bootstrap();
