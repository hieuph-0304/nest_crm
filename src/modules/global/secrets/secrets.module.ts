import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SecretsService } from './secrets.service';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
  providers: [SecretsService],
})
export class SecretsModule {}
