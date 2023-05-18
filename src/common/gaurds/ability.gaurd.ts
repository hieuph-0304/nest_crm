import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ForbiddenError } from '@casl/ability';

import { CHECK_ABILITY } from '../constants';
import { RequiredRule } from '../decorators/ability.decorator';
import { AbilityFactory } from '../../modules/ability/ability.factory';

@Injectable()
export class AbilitiesGaurd implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: AbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext) {
    const rules =
      this.reflector.get<RequiredRule[]>(CHECK_ABILITY, context.getHandler()) ||
      [];

    // const user = context.switchToHttp().getRequest()
    const currentUser = {
      id: 1,
      isAdmin: false,
      orgId: 1,
    };
    const ability = this.caslAbilityFactory.defineAbility(currentUser);

    try {
      rules.forEach((rule) =>
        ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject),
      );

      return true;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error['message']);
      }
    }
  }
}
