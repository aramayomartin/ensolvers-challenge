import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity({ name: 'notes' })
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: false })
  archived: boolean;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => Category, (category) => category.notes)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
