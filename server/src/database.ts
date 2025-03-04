import { DataSource } from "typeorm";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    logger: "advanced-console",
    synchronize: true,
    entities: [

    ],
});