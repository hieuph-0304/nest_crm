import { SetMetadata } from '@nestjs/common';
import { Subjects } from '../../modules/ability/ability.factory';
import { ACTION, CHECK_ABILITY } from '../constants';
import { Post } from 'src/entities/post.entity';

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
