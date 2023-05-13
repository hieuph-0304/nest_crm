import { SetMetadata } from '@nestjs/common';
import { Role } from '../../modules/users1/entities/role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
