import { Global, Module } from '@nestjs/common';

import { LoggerModule } from './logger/logger.module';
import { SecretsModule } from './secrets/secrets.module';

@Global()
@Module({
  imports: [LoggerModule, SecretsModule],
  exports: [LoggerModule, SecretsModule],
})
export class GlobalModule {}
