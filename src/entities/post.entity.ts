import { Column, Entity } from 'typeorm';
import { Base } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';

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
