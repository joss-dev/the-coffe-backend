import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cafeteria } from './entities/cafeteria.entity';
import { CreateCafeteriaDto } from './dto/create-cafeteria.dto';
import { UpdateCafeteriaDto } from './dto/update-cafeteria.dto';

@Injectable()
export class CafeteriaService {
  constructor(
    @InjectRepository(Cafeteria)
    private cafeteriaRepo: Repository<Cafeteria>,
  ) {}

  create(dto: CreateCafeteriaDto) {
    const cafeteria = this.cafeteriaRepo.create(dto);
    return this.cafeteriaRepo.save(cafeteria);
  }

  findAll() {
    return this.cafeteriaRepo.find();
  }

  async findOne(id: number) {
    const cafeteria = await this.cafeteriaRepo.findOneBy({ id });
    if (!cafeteria) throw new NotFoundException(`Cafeteria #${id} not found`);
    return cafeteria;
  }

  async update(id: number, dto: UpdateCafeteriaDto) {
    const cafeteria = await this.cafeteriaRepo.preload({ id, ...dto });
    if (!cafeteria) throw new NotFoundException(`Cafeteria #${id} not found`);
    return this.cafeteriaRepo.save(cafeteria);
  }

  async remove(id: number) {
    const result = await this.cafeteriaRepo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Cafeteria #${id} not found`);
  }
}
