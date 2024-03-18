"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'dbname',
    entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/**/orm/*{.ts,.js}'],
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=ormconfig.js.map