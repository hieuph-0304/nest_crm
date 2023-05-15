import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from 'src/entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbilityModule } from '../ability/ability.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), AbilityModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {
  public configure(consumer: MiddlewareConsumer) {}
}
