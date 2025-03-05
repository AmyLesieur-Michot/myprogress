import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Questionary } from "./Questionary";
import { Assigned_questionary } from "./Assigned_questionary";

export enum UserRole {
    STUDENT = "student",
    TEACHER = "teacher",
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    first_name!: string;
    @Column()
    last_name!: string;
    @Column()
    email!: string;
    @Column()
    password!: string;

    @Column({
        type: "enum", 
        enum: UserRole, 
        default: UserRole.STUDENT, 
    })
    role!: UserRole;

    @OneToMany(() => Questionary, (questionary) => questionary.created_by)
    questionaries!: Questionary[];

    @OneToMany(() => Assigned_questionary, (assigned_questionary) => assigned_questionary.student)
    assigned_questionary!: Assigned_questionary[];

    @OneToMany(() => Assigned_questionary, (assigned_questionary) => assigned_questionary.assigned_by)
    assigned!: Assigned_questionary[];
}