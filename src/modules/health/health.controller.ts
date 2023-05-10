import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { IHealthService } from './health.adapter';

@Controller()
@ApiTags('health')
export class HealthController {
  constructor(private readonly healthService: IHealthService) {}

  @Get('/health')
  async getHealth(): Promise<string> {
    return this.healthService.getText();
  }

  @Get('/health-error')
  async getError(): Promise<unknown> {
    return this.healthService.getError();
  }
}
