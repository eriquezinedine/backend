"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "1234",
//     database: "huachowoman",
//     entities: [ User, Influencer,Services ],
//     logging: true,
//     synchronize: true, //! Puedo observar todo el codigo que se genera
// })
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: config_1.DB_HOST,
    port: parseInt(config_1.DB_PORT + ""),
    username: config_1.DB_USER,
    password: config_1.DB_PASSWORD,
    database: config_1.DB_DATABASE,
    // entities: [ User, Influencer,Services ],
    logging: true,
    synchronize: true, //! Puedo observar todo el codigo que se genera
});
//! Para desarrollo la entities es buena, pero para PRODUCCION
//! Se recomienda migrations
