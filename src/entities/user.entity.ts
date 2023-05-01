import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({
  name: 'users',
})
export class UserEntity extends BaseEntity {
  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    default: false,
    name: 'is_active',
  })
  isActive: boolean;
}
