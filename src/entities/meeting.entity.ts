import { Column, Entity, ManyToMany } from 'typeorm';

import { Base } from './base.entity';
import { Employee } from './employee.entity';

@Entity({
  name: 'meeting',
})
export class Meeting extends Base {
  @Column()
  zoomUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  attendees: Employee[];
}
