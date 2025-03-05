import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./Question";
import { Questionary_answer } from "./Questionary_answer";

@Entity()
export class Answer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    value!: number;

    @Column({ type: "timestamp" })
    date_submitted!: Date;

    @ManyToOne(() => Question, (question) => question.answers)
    question!: Question;

    @ManyToOne(() => Questionary_answer, (questionary_answer) => questionary_answer.answers)
    questionary_answer!: Questionary_answer;
}