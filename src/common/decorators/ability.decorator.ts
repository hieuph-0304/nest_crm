import { SetMetadata } from '@nestjs/common';

import { Post } from '../../entities/post.entity';
import { ACTION, CHECK_ABILITY } from '../constants';
import { Subjects } from '../../modules/ability/types';

export interface RequiredRule {
  action: ACTION;
  subject: Subjects;
}

export const CheckAbilities = (...requirements: RequiredRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);

export class ReadPostAbility implements RequiredRule {
  action = ACTION.READ;
  subject = Post;
}
