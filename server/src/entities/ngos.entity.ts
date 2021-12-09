import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ngos' })
export class NgoEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'img_url', type: 'varchar', length: 50 })
    imgUrl?: string;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name?: string;

    @Column({ name: 'city', type: 'varchar', length: 25 })
    city?: string;

    @Column({ name: 'state', type: 'varchar', length: 2 })
    state?: string;

    @Column({ name: 'description', type: 'text' })
    description?: string;
}