import { Global, Module } from '@nestjs/common';

import { SecretsModule } from './secrets/secrets.module';
import { LoggerModule } from './logger/logger.module';

@Global()
@Module({
  imports: [LoggerModule, SecretsModule],
  exports: [LoggerModule, SecretsModule],
})
export class GlobalModule {}
