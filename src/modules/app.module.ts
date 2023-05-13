import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDataSource } from '../database/database.config';
import { GlobalModule } from './global/global.module';
import { AuthModule } from './auth/auth.module';
import { Users1Module } from './users1/users1.module';

@Module({
  imports: [
    AuthModule,
    Users1Module,
    PostsModule,
    HealthModule,
    GlobalModule,
    TypeOrmModule.forRoot(MysqlDataSource.options),
  ]
})
export class AppModule {}
