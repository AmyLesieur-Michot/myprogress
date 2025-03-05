import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "./Answer";
import { Assigned_questionary } from "./Assigned_questionary";
import { Teacher_answer } from "./Teacher_answer";

@Entity()
export class Questionary_answer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "timestamp" })
    date_submitted!: Date;

    @ManyToOne(() => Assigned_questionary, (assigned_questionary) => assigned_questionary.questionary_answers)
    assigned_questionary!: Assigned_questionary;

    @OneToMany(() => Answer, (answer) => answer.questionary_answer)
    answers!: Answer[];

    @OneToMany(() => Teacher_answer, (teacher_answer) => teacher_answer.questionary_answer)
    teacher_answers!: Teacher_answer[];
}