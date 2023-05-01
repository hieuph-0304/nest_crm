import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({
  name: 'posts',
})
export class PostEntity extends BaseEntity {
  @Column({
    name: 'title',
  })
  title: string;

  @Column({
    name: 'content',
  })
  content: string;
}
