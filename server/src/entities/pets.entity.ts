import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pets' })
export class PetEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'img_url', type: 'varchar', length: 50 })
    imgUrl?: string;

    @Column({ name: 'name', type: 'varchar', length: 25 })
    name?: string;

    @Column({ name: 'gender', type: 'varchar', length: 10 })
    gender?: string;

    @Column({ name: 'age', type: 'varchar', length: 25 })
    age?: string;

    @Column({ name: 'microchip', type: 'bigint' })
    microchip?: number;

    @Column({ name: 'species', type: 'varchar', length: 10 })
    species?: string;

    @Column({ name: 'breed', type: 'varchar', length: 25 })
    breed?: string;

    @Column({ name: 'size', type: 'varchar', length: 10 })
    size?: string;

    @Column({ name: 'city', type: 'varchar', length: 25 })
    city?: string;

    @Column({ name: 'state', type: 'varchar', length: 2 })
    state?: string;

    @Column({ name: 'ngo_id', type: 'smallint' })
    ngoId?: number;

    @Column({ name: 'personality', type: 'text' })
    personality?: string;

    @Column({ name: 'inclusion_date', type: 'date' })
    inclusionDate?: Date | string;

    @Column({ name: 'adoption_fee', type: 'smallint' })
    adoptionFee?: number;

    @Column({ name: 'is_adopted', type: 'boolean' })
    isAdopted?: boolean;
}