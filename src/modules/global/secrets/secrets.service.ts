import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SecretsService extends ConfigService {
  constructor() {
    super();
  }

  ENV = this.get<string>('ENV');
  PORT = this.get<number>('PORT');
}
