import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ISecretsService } from './secrets.adapter';

@Injectable()
export class SecretsService extends ConfigService implements ISecretsService {
  constructor() {
    super();
  }

  ENV = this.get<string>('ENV');
  PORT = this.get<number>('PORT');
}
