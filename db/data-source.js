"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.dataSourceOptions = void 0;
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
const { url } = require("inspector");

dotenv.config({ path: './.env' });

exports.dataSourceOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false,
};
exports.AppDataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
