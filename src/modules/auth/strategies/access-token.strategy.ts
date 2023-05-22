import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { JwtPayload } from '../types';
import { SecretsService } from '../../../modules/global/secrets/secrets.service';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(secretConfig: SecretsService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretConfig.ACCESS_TOKEN_SECRET,
    });
  }

  validate(payload: JwtPayload) {
    return payload;
  }
}
