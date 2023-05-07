import { Post } from 'src/entities/post.entity';
import { DataSource } from 'typeorm';

export const PostRepository = {
  provide: 'POST_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
  inject: ['DATA_SOURCE'],
};
