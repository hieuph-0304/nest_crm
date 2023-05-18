import { Column, Entity } from 'typeorm';

import { Base } from './base.entity';

@Entity({
  name: 'users',
})
export class User extends Base {
  @Column({ unique: true })
  email: string;

  @Column()
  hash: string;

  @Column({ nullable: true })
  hashedRt?: string;
}
