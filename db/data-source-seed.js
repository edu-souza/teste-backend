"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptionsSeed = void 0;
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
var data_source_1 = require("./data-source");
dotenv.config({ path: './.env' });
exports.dataSourceOptionsSeed = __assign(__assign({}, data_source_1.dataSourceOptions), { migrations: ['dist/db/seeds/*.js'] });
var SeedDataSource = new typeorm_1.DataSource(exports.dataSourceOptionsSeed);
exports.default = SeedDataSource;
