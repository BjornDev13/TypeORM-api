import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ClassRoom {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying", {
        length: 50
    })
    name: string;
}
