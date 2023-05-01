import { PostEntity } from 'src/entities/post.entity';
import { DataSource } from 'typeorm';

export const PostRepository = {
  provide: 'POST_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(PostEntity),
  inject: ['DATA_SOURCE'],
};
