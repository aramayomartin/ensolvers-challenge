import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Note } from './note.entity';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Note, (note) => note.category)
  notes: Note[];
}
