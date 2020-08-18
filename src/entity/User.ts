import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { ClassRoom } from "./ClassRoom"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("character varying", {
        length: 50
    })
    first_name: string;

    @Column("character varying", {
        length: 50
    })
    last_name: string;

    @Column()
    ci: number;

    @Column("text")
    password: string;
    
    @Column()
    is_active: boolean

    @ManyToMany(type => ClassRoom, class_room => class_room.id, {
        cascade: true
    })
    @JoinTable()
    class_room: ClassRoom[];


}
