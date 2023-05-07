import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from 'src/entities/employee.entity';
import { ContactInfo } from 'src/entities/contact-info.entity';
import { Meeting } from 'src/entities/meeting.entity';
import { Task } from 'src/entities/task.entity';

@Injectable()
export class HealthService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: Repository<Employee>,
    @Inject('CONTACT_INFO_REPOSITORY')
    private contactInfoRepository: Repository<ContactInfo>,
    @Inject('MEETING_REPOSITORY')
    private mettingRepository: Repository<Meeting>,
    @Inject('TASK_REPOSITORY') private taskRepository: Repository<Task>,
  ) {}

  async seed() {
    // employee 1: CEO
    const ceo = await this.employeeRepository.save({ name: 'Mr. CEO' });

    // contact info
    await this.contactInfoRepository.save({
      email: 'ceo@gmail.com',
      // employeeId: ceo.id,
      employee: ceo,
    });

    // task
    const task1 = await this.taskRepository.save({ name: 'Hire people' });
    const task2 = await this.taskRepository.save({ name: 'Present to CEO' });

    // meeting
    const metting1 = await this.mettingRepository.save({
      zoomUrl: 'meeting.com',
      attendees: [ceo],
    });

    // employee 2: manager
    await this.employeeRepository.save({
      name: 'HieuPH',
      manager: ceo,
      tasks: [task1, task2],
      meetings: [metting1],
    });
  }

  async getEmployeeById(id: string) {
    // return this.employeeRepository.findOne({
    //   where: { id },
    //   relations: [
    //     'manager',
    //     'contactInfo',
    //     'meetings',
    //     'tasks',
    //     'directReports',
    //   ],
    // });

    return this.employeeRepository
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.directReports', 'directReports')
      .leftJoinAndSelect('employee.meetings', 'meetings')
      .leftJoinAndSelect('employee.tasks', 'tasks')
      .leftJoinAndSelect('employee.contactInfo', 'contactInfo')
      .leftJoinAndSelect('employee.manager', 'manager')
      .where('employee.id = :employeeId', { employeeId: id })
      .getOne();
  }

  async deleteEmployee(employeeId: string) {
    return this.employeeRepository.delete(employeeId);
  }
}
