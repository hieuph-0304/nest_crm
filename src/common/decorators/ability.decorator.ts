import { SetMetadata } from '@nestjs/common';
import { ACTION, CHECK_ABILITY } from '../constants';
import { Post } from 'src/entities/post.entity';
import { Subjects } from 'src/modules/ability/types';

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
