import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccessTokenGuard } from '../common/gaurds';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { HealthModule } from './health/health.module';
import { GlobalModule } from './global/global.module';
import { AbilityModule } from './ability/ability.module';
import { MysqlDataSource } from '../database/database.config';

@Module({
  imports: [
    AuthModule,
    PostsModule,
    HealthModule,
    GlobalModule,
    AbilityModule,
    TypeOrmModule.forRoot(MysqlDataSource.options),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
