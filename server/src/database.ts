import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Questionary } from "./entities/Questionary";
import { Assigned_questionary } from "./entities/Assigned_questionary";
import { Question } from "./entities/Question";
import { Questionary_answer } from "./entities/Questionary_answer";
import { Answer } from "./entities/Answer";
import { Teacher_answer } from "./entities/Teacher_answer";

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
        User,
        Questionary,
        Assigned_questionary,
        Question,
        Questionary_answer,
        Answer,
        Teacher_answer,
    ],
});