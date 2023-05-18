import { Column, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { Base } from './base.entity';

@Entity({
  name: 'posts',
})
export class Post extends Base {
  @ApiProperty()
  @Column({
    name: 'title',
  })
  title: string;

  @ApiProperty()
  @Column({
    name: 'content',
  })
  content: string;
}
