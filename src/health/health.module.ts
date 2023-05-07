import { Module } from '@nestjs/common';
import HealthController from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthService } from './heath.service';
import {
  ContactInfoRepository,
  EmployeeRepository,
  MeetingRepository,
  TaskRepository,
} from './health.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [TerminusModule, DatabaseModule],
  controllers: [HealthController],
  providers: [
    HealthService,
    EmployeeRepository,
    ContactInfoRepository,
    MeetingRepository,
    TaskRepository,
  ],
})
export class HealthModule {}
