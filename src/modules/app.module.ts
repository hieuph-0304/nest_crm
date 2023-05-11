import { Module } from '@nestjs/common';
import { PostModule } from './posts/posts.module';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDataSource } from '../database/database.config';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [
    PostModule,
    HealthModule,
    GlobalModule,
    TypeOrmModule.forRoot(MysqlDataSource.options),
  ],
})
export class AppModule {}
