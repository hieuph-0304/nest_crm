import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SecretsService extends ConfigService {
  constructor() {
    super();
  }

  ENV = this.get<string>('ENV');
  PORT = this.get<number>('PORT');
  ACCESS_TOKEN_SECRET = this.get<string>('ACCESS_TOKEN_SECRET');
  REFRESH_TOKEN_SECRET = this.get<string>('REFRESH_TOKEN_SECRET');
}
