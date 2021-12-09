import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'adopters' })
export class AdopterEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'cpf', type: 'bigint' })
    cpf?: number;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name?: string;

    @Column({ name: 'birthdate', type: 'date' })
    birthdate?: Date | string;

    @Column({ name: 'email', type: 'varchar', length: 50 })
    email?: string;

    @Column({ name: 'password', type: 'varchar', length: 10 })
    password?: string;

    @Column({ name: 'phone', type: 'bigint' })
    phone?: number;

    @Column({ name: 'address', type: 'varchar', length: 255 })
    address?: string;

    @Column({ name: 'complement', type: 'varchar', length: 100 })
    complement?: string;

    @Column({ name: 'neighborhood', type: 'varchar', length: 50 })
    neighborhood?: string;

    @Column({ name: 'city', type: 'varchar', length: 25 })
    city?: string;

    @Column({ name: 'state', type: 'varchar', length: 2 })
    state?: string;

    @Column({ name: 'pets', type: 'smallint', array: true })
    pets?: number[];
}