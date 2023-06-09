import { HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ApiException } from 'src/utils/exception';
import { Task } from '../../entities/task.entity';
import { Meeting } from '../../entities/meeting.entity';
import { Employee } from '../../entities/employee.entity';
import { ContactInfo } from '../../entities/contact-info.entity';
import { LoggerService } from '../global/logger/logger.service';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(ContactInfo)
    private readonly contactInfoRepository: Repository<ContactInfo>,
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
    @InjectRepository(Meeting)
    private readonly mettingRepository: Repository<Meeting>,
    private readonly loggerService: LoggerService,
  ) {}

  async getText(): Promise<string> {
    const appName = `Nest API UP!!`;
    this.loggerService.log(
      appName,
      `${HealthService.name}/${this.getText.name}`,
    );

    return appName;
  }

  async getError(): Promise<unknown> {
    throw new ApiException('Error message', HttpStatus.INTERNAL_SERVER_ERROR);
  }

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
