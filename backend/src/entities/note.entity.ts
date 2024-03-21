import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Category } from './category.entity';
import { User } from './user.entity';

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

  @ManyToMany(() => Category, (category) => category.notes)
  @JoinTable()
  categories: Category[];

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
