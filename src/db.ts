import {DataSource} from 'typeorm';
import { User } from './entities/User';
import { Influencer } from './entities/Influencer';
// import { Photo } from './entities/Photo';
import { Services } from './entities/Services';
import { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from './config';

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

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: parseInt(DB_PORT + ""),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [ User, Influencer,Services ],
    logging: true,
    synchronize: true, //! Puedo observar todo el codigo que se genera
})

//! Para desarrollo la entities es buena, pero para PRODUCCION

//! Se recomienda migrations