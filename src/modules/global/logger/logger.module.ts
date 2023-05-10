import { Module } from '@nestjs/common';

import { ILoggerService } from './logger.adapter';
import { LoggerService } from './logger.service';

@Module({
  providers: [
    {
      provide: ILoggerService,
      useClass: LoggerService,
    },
  ],
  exports: [ILoggerService],
})
export class LoggerModule {}
