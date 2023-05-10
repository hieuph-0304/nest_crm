import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { AppExceptionFilter, ExceptionInterceptor } from 'nestjs-error-handler';
import { Logger } from '@nestjs/common';
import { HTTP_STATUS, TIME_ZONE } from './common/constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest API Documentation')
    .setDescription('The description of the API documentation')
    .setVersion('1.0.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/', app, swaggerDocument);

  // Error handler
  app.useGlobalFilters(
    new AppExceptionFilter(new Logger(), HTTP_STATUS, TIME_ZONE.ASIA_TOKYO),
  );
  app.useGlobalInterceptors(new ExceptionInterceptor());

  await app.listen(3000);
}
bootstrap();
