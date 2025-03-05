import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./Question";
import { Questionary_answer } from "./Questionary_answer";

@Entity()
export class Teacher_answer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Question, (question) => question.teacher_answer)
    question!: Question;

    @ManyToOne(() => Questionary_answer, (questionary_answer) => questionary_answer.teacher_answers)
    questionary_answer!: Questionary_answer;
}