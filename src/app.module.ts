import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDataSource } from './database/database.config';

@Module({
  imports: [
    PostsModule,
    HealthModule,
    TypeOrmModule.forRoot(MysqlDataSource.options),
  ],
})
export class AppModule {}
