import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Leave {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({name:"start_date"})
    startDate: string;

    @Column({name:"end_date"})
    endDate: string;

    @Column()
    reason: string;

    @Column({default: 3})
    approval: number;

    @Column({ name: "created_by", nullable: true })
    createdBy: number;

    @Column({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: string;

    @Column({ name: "updated_by", nullable: true })
    updatedBy: number;

    @Column({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" })
    updatedAt: string;

    @Column({default:1})
    status: number;

}
