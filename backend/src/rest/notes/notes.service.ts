import {
  HttpException,
  HttpStatus,
  Injectable,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from '@/entities/note.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
@UsePipes(ValidationPipe)
export class NotesService {
  constructor(
    @InjectRepository(Note) private repository: Repository<Note>,
    private readonly categoryService: CategoriesService,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const note = this.repository.create(createNoteDto);
    const categories = await this.categoryService.findByIds(
      createNoteDto.categoriesIds,
    );
    delete createNoteDto.categoriesIds;
    Object.assign(note, { ...createNoteDto, categories });
    return await this.repository.save(note);
  }

  async findAll() {
    return await this.repository.find({ relations: ['categories'] });
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    const note = await this.repository.findOne({ where: { id } });
    if (!note) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    const categories = await this.categoryService.findByIds(
      updateNoteDto.categoriesIds,
    );
    delete updateNoteDto.categoriesIds;
    Object.assign(note, { ...updateNoteDto, categories });
    return await this.repository.save(note);
  }

  async remove(id: number) {
    const note = await this.repository.findOne({ where: { id } });
    return await this.repository.remove(note);
  }
}
