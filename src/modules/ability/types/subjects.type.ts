import { InferSubjects } from '@casl/ability';

import { Post } from '../../../entities/post.entity';

export type Subjects = InferSubjects<typeof Post> | 'all';
