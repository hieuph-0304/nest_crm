import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HealthService } from './heath.service';
import { HealthController } from './health.controller';
import { Task } from '../../entities/task.entity';
import { Meeting } from '../../entities/meeting.entity';
import { Employee } from '../../entities/employee.entity';
import { ContactInfo } from '../../entities/contact-info.entity';

@Module({
  imports: [
    TerminusModule,
    TypeOrmModule.forFeature([Employee, ContactInfo, Task, Meeting]),
  ],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
