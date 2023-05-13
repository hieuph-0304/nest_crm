import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    // get roles
    const roles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log(roles);

    if (!roles) {
      return true;
    }
    // check roles current user
    // const { user } = context.switchToHttp().getRequest()

    const user = {
      name: 'Marius',
      roles: [Role.USER],
    };
    return roles.some((role) => user.roles.includes(role));
  }
}
