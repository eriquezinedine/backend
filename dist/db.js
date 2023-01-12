"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Influencer_1 = require("./entities/Influencer");
// import { Photo } from './entities/Photo';
const Services_1 = require("./entities/Services");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "containers-us-west-182.railway.app",
    port: 7640,
    username: "postgres",
    password: "xzGBGf9rqRkzHxJdZWrt",
    database: "railway",
    entities: [User_1.User, Influencer_1.Influencer, Services_1.Services],
    logging: true,
    synchronize: true, //! Puedo observar todo el codigo que se genera
});