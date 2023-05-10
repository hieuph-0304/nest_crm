import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthService } from './heath.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/entities/employee.entity';
import { ContactInfo } from 'src/entities/contact-info.entity';
import { Task } from 'src/entities/task.entity';
import { Meeting } from 'src/entities/meeting.entity';
import { HealthController } from './health.controller';
import { IHealthService } from './health.adapter';

@Module({
  imports: [
    TerminusModule,
    TypeOrmModule.forFeature([Employee, ContactInfo, Task, Meeting]),
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: IHealthService,
      useClass: HealthService,
    },
  ],
  exports: [IHealthService],
})
export class HealthModule {}
