import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "first_name"})
    firstName: string;

    @Column({name: "last_name"})
    lastName: string;

    @Column({unique:true})
    email: string;

    @Column({name:"phone_number",unique:true})
    phoneNumber: string;

    @Column()
    password: string;

    @Column({name: "created_by", nullable:true})
    createdBy: number;

    @Column({name: "created_at", type: "timestamp", default: ()=> "CURRENT_TIMESTAMP"})
    createdAt: string;

    @Column({name: "updated_by", nullable:true})
    updatedBy: number;

    @Column({name: "updated_at", type: "timestamp", default: ()=> "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"})
    updatedAt: string;

    @Column({default: 1})
    status: number; 
}
