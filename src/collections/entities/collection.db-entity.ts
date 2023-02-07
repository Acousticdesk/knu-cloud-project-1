import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('collections')
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  name: string;
}
