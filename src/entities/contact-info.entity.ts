import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { Base } from './base.entity';
import { Employee } from './employee.entity';

@Entity({
  name: 'contact_info',
})
export class ContactInfo extends Base {
  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  // {onDelete: "CASCADE"}: contactInfo will be deleted when employee is deleted
  @OneToOne(() => Employee, (employee) => employee.contactInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  employee: Employee;
}
