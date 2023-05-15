import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDataSource } from '../database/database.config';
import { GlobalModule } from './global/global.module';
import { AuthModule } from './auth/auth.module';
import { AbilityModule } from './ability/ability.module';

@Module({
  imports: [
    AuthModule,
    PostsModule,
    HealthModule,
    GlobalModule,
    TypeOrmModule.forRoot(MysqlDataSource.options),
    AbilityModule,
  ],
})
export class AppModule {}
