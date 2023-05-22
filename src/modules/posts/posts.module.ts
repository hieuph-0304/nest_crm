import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module } from '@nestjs/common';

import { PostsService } from './posts.service';
import { Post } from '../../entities/post.entity';
import { PostsController } from './posts.controller';
import { AbilityModule } from '../ability/ability.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), AbilityModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {
  public configure(consumer: MiddlewareConsumer) {}
}
