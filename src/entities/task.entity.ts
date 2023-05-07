import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { Employee } from './employee.entity';

@Entity({
  name: 'task',
})
export class Task extends Base {
  @Column()
  name: string;

  // {onDelete: "SET NULL"}: employeeId will be set null when employee is deleted
  @ManyToOne(() => Employee, (employee) => employee.tasks, {
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  employee: Employee;
}
