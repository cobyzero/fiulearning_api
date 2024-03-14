import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";

@Entity("users")
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}