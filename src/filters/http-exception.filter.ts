import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as moment from 'moment-timezone';
import { HTTP_STATUS } from '../common/constants';
import { ApiException, ErrorModel } from '../utils/exception';

import { ILoggerService } from 'src/modules/global/logger/logger.adapter';

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(private readonly loggerService: ILoggerService) {}

  catch(exception: ApiException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    this.loggerService.error(exception);

    const code = [
      exception.code,
      status,
      HttpStatus.INTERNAL_SERVER_ERROR,
    ].find((c) => c);

    const error: ErrorModel = {
      error: {
        code,
        traceId: exception.uuid,
        message: HTTP_STATUS[String(code)] || exception.message,
        timestamp: moment(new Date()).tz(process.env.TZ).format(),
        path: request.url,
      },
    };

    response.status(status).json(error);
  }
}
