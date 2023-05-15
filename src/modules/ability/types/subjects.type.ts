import { InferSubjects } from '@casl/ability';
import { Post } from 'src/entities/post.entity';

export type Subjects = InferSubjects<typeof Post> | 'all';
