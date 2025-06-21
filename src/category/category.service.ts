import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Like, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  create(dto: CreateCategoryDto) {
    const category = this.categoryRepo.create(dto);
    return this.categoryRepo.save(category);
  }

  async findAll(query: PaginationDto) {
    const { rows = 10, first = 0, search } = query;
    const [data, total] = await this.categoryRepo.findAndCount({
      where: { 
        deleted_at: IsNull(),
        ...(search && { nombre: Like(`%${search}%`) })
      },
      order: { created_at: 'DESC' },
      skip: first,
      take: rows
    });

    return {
      data,
      totalRecords: total,
    };
  }

  async findOne(id: number) {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return category;
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const category = await this.categoryRepo.preload({ id, ...dto });
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return this.categoryRepo.save(category);
  }

  async remove(id: number) {
    const result = await this.categoryRepo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Category #${id} not found`);
  }
}
