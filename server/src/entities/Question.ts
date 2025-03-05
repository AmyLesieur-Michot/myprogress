import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Questionary } from "./Questionary";
import { Answer } from "./Answer";
import { Teacher_answer } from "./Teacher_answer";

@Entity()
export class Question extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    content!: string;

    @ManyToOne(() => Questionary, (questionary) => questionary.questions)
    questionary!: Questionary;

    @OneToMany(() => Answer, (answer) => answer.question)
    answers!: Answer[];

    @OneToMany(() => Teacher_answer, (teacher_answer) => teacher_answer.question)
    teacher_answer!: Teacher_answer[];
}