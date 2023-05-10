import { DataSource } from 'typeorm';

export const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '206189323',
  database: 'nestjs_crm',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  logging: 'all',
  synchronize: true, // synchronize = true => database schema should be auto created on every application launch.
  migrationsRun: false, // migrationsRun = true => should be auto run on every application launch
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsTableName: 'migration_history', // Migrations table name, default = "migrations".
});
