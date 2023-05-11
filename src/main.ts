import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LogAxiosErrorInterceptor } from 'nestjs-convert-to-curl';
import { AppExceptionFilter } from './filters/http-exception.filter';
import { AppModule } from './modules/app.module';
import { ApiException } from './utils/exception';

import { ExceptionInterceptor } from './interceptors/http-exception.interceptor';
import { LoggerService } from './modules/global/logger/logger.service';
import { SecretsService } from './modules/global/secrets/secrets.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const loggerService = app.get(LoggerService);

  app.useGlobalFilters(new AppExceptionFilter(loggerService));
  app.useGlobalInterceptors(
    new ExceptionInterceptor(),
    new LogAxiosErrorInterceptor(),
  );

  const { ENV, PORT } = app.get(SecretsService);

  app.useLogger(loggerService);

  app.setGlobalPrefix('api/v1', {
    exclude: [
      { path: 'health', method: RequestMethod.GET },
      { path: 'health-error', method: RequestMethod.GET },
    ],
  });

  const config = new DocumentBuilder()
    .setTitle('Nest API Documentation')
    .setDescription('The description of the API documentation')
    .setVersion('1.0.0')
    .addTag('API Documentation')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  loggerService.log(
    `🟢 API listening at ${PORT} on ${ENV?.toUpperCase()} 🟢\n`,
    'Application',
  );

  await app.listen(PORT);

  loggerService.log(
    `🔵 Swagger listening at ${await app.getUrl()}/docs 🔵 \n`,
    'Swaggger',
  );

  process.on('unhandledRejection', (error: ApiException) => {
    error.context = 'unhandledRejection';
    loggerService.error(error);
  });
}

bootstrap();
