import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { Note } from '@/entities/note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from '../categories/categories.service';
import { Category } from '@/entities/category.entity';
import { UsersService } from '../users/users.service';
import { User } from '@/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note, Category, User])],
  controllers: [NotesController],
  providers: [NotesService, CategoriesService, UsersService],
})
export class NotesModule {}
