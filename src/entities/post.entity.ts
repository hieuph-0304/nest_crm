import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'posts',
})
export class PostEntity extends BaseEntity {
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
