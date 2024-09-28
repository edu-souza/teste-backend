import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { dataSourceOptions } from './data-source';

dotenv.config({ path: './.env' });

export const dataSourceOptionsSeed: DataSourceOptions = {
  ...dataSourceOptions,
  migrations: ['dist/db/seeds/*.js'],
};

const SeedDataSource = new DataSource(dataSourceOptionsSeed);

export default SeedDataSource;
