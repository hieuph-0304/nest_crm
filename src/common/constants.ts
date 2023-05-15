export enum TIME_ZONE {
  ASIA_TOKYO = 'Asia/Tokyo',
}

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

export const CHECK_ABILITY = 'check_ability';

export enum ACTION {
  MANAGE = 'manage', // wildcard for any action
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
}
