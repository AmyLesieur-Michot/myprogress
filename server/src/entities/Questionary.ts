import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Assigned_questionary } from "./Assigned_questionary";
import { Question } from "./Question";

@Entity() 
export class Questionary extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;
    @Column()
    description!: string;

    @ManyToOne(() => User, (user) => user.questionaries)
    created_by!: User;

    @OneToMany(() => Assigned_questionary, (assigned_questionary) => assigned_questionary.questionaries)
    assigned_questionary!: Assigned_questionary[];

    @OneToMany(() => Question, (question) => question.questionary)
    questions!: Question[];
}