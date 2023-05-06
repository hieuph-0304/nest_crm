import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [PostsModule, HealthModule],
})
export class AppModule {}
