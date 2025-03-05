import { BaseEntity, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Questionary } from "./Questionary";
import { User } from "./User";
import { Questionary_answer } from "./Questionary_answer";

@Entity()
export class Assigned_questionary extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Questionary, (questionary) => questionary.assigned_questionary)
    questionaries!: Questionary;

    @ManyToOne(() => User, (user) => user.assigned_questionary)
    student!: User;

    @ManyToOne(() => User, (user) => user.assigned)
    assigned_by!: User;

    @OneToMany(() => Questionary_answer, (questionary_answer) => questionary_answer.assigned_questionary)
    questionary_answers!: Questionary_answer[];

}