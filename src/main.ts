import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionLoggerFilter } from './utils/exception-logger-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionLoggerFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();
