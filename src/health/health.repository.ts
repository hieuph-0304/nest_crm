import { ContactInfo } from 'src/entities/contact-info.entity';
import { Employee } from 'src/entities/employee.entity';
import { Meeting } from 'src/entities/meeting.entity';
import { Task } from 'src/entities/task.entity';
import { DataSource } from 'typeorm';

const EmployeeRepository = {
  provide: 'EMPLOYEE_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Employee),
  inject: ['DATA_SOURCE'],
};

const ContactInfoRepository = {
  provide: 'CONTACT_INFO_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(ContactInfo),
  inject: ['DATA_SOURCE'],
};

const MeetingRepository = {
  provide: 'MEETING_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Meeting),
  inject: ['DATA_SOURCE'],
};

const TaskRepository = {
  provide: 'TASK_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
  inject: ['DATA_SOURCE'],
};

export {
  EmployeeRepository,
  ContactInfoRepository,
  TaskRepository,
  MeetingRepository,
};
