import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ISecretsService } from './secrets.adapter';
import { SecretsService } from './secrets.service';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
  providers: [
    {
      provide: ISecretsService,
      useClass: SecretsService,
    },
  ],
  exports: [ISecretsService],
})
export class SecretsModule {}
