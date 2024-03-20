import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '@/entities/category.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private repository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const { name } = createCategoryDto;
    if (!name) throw new HttpException('Invalid', HttpStatus.BAD_REQUEST);
    const newCategory = this.repository.create(createCategoryDto);
    return await this.repository.save(newCategory);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.repository.findOne({ where: { id } });
    if (!category) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    Object.assign(category, updateCategoryDto);
    return await this.repository.save(category);
  }

  async findByIds(ids: number[]) {
    return await this.repository.find({ where: { id: In(ids) } });
  }
}
