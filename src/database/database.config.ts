import { DataSource } from 'typeorm';

export const DatabaseConfig = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '206189323',
      database: 'nestjs_crm',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      logging: 'all',
      synchronize: true,
    });

    return dataSource.initialize();
  },
};
