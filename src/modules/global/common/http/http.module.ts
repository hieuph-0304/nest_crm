import { Module } from '@nestjs/common';

import { IHttpService } from './http.adapter';
import { HttpService } from './http.service';

@Module({
  providers: [
    {
      provide: IHttpService,
      useClass: HttpService,
    },
  ],
  exports: [IHttpService],
})
export class HttpModule {}
