import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: 'tribofit',
    username: 'admin',
    password: '8UEMcJ6SN6S0S36W4VzLkDWvYMTM9qPx',
    port: 5432,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
}

export default new DataSource(dataSourceOptions);
