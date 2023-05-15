import { Injectable } from '@nestjs/common';
import {
  AbilityBuilder,
  ExtractSubjectType,
  createMongoAbility,
} from '@casl/ability';
import { ACTION } from 'src/common/constants';
import { Post } from 'src/entities/post.entity';
import { Subjects } from './types';

@Injectable()
export class AbilityFactory {
  defineAbility(user: { id: number; isAdmin: boolean; orgId: number }) {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
    if (user.isAdmin) {
      ACTION.MANAGE, 'all'; // full permission =  CRUD permission
    } else {
      can(ACTION.READ, 'all');
      cannot(ACTION.CREATE, Post).because('only admin can be created');
      cannot(ACTION.UPDATE, Post).because('only admin can be updated');
      cannot(ACTION.DELETE, Post).because('only admin can be deleted');
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
