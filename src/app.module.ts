import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, PostsModule],
})
export class AppModule {}
