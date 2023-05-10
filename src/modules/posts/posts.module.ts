import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post } from 'src/entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IPostService } from './post.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [
    {
      provide: IPostService,
      useClass: PostService,
    },
  ],
  exports: [IPostService],
})
export class PostModule {}
