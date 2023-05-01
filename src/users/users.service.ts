import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getListUsers() {
    return 'Xin chao users service';
  }
}
