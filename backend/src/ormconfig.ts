import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'dbname',
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'], // Ruta absoluta a las entidades
  migrations: [__dirname + '/**/orm/*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
