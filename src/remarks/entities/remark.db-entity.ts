import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('remarks')
export class Remark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: string;

  @Column()
  collection: number;
}
