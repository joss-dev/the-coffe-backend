import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from '../category/entities/category.entity';
import { PaginationDto } from '../common/dto/pagination.dto';
import validator from 'validator';
import * as path from 'path';
import * as fs from 'fs/promises';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(
    createProductDto: CreateProductDto,
    file?: Express.Multer.File,
  ): Promise<Product> {
    const categoria = await this.categoryRepository.findOneBy({
      id: createProductDto.categoria_id,
    });
    console.log(categoria);
    if (!categoria) throw new NotFoundException(`Categoría no encontrada`);
    if (createProductDto.codigo != null) {
      await this.ensureCodigoIsUnique(createProductDto.codigo);
    }

    let imagePath: string | undefined;
    if (file) {
      imagePath = `/images/${file.filename}`;
    } else if (createProductDto.imagen) {
      if (!validator.isURL(createProductDto.imagen)) {
        throw new Error('URL de imagen inválida.');
      }
      imagePath = createProductDto.imagen;
    }

    createProductDto.imagen = imagePath;

    const product = this.productRepository.create({
      ...createProductDto,
      categoria,
    });

    return this.productRepository.save(product);
  }
  async findAll(query: PaginationDto) {
    const { rows = 10, first = 0, search, status } = query;
    const categories = query['categories[]'];
    const qb = this.productRepository
      .createQueryBuilder('item')
      .orderBy('item.created_at', 'DESC')
      .where('item.deleted_at IS NULL')
      .leftJoinAndSelect('item.categoria', 'categories')
      .skip(first)
      .take(rows);
    if (status != undefined) {
      qb.andWhere('item.activo = :status', { status: status == '1' });
    }

    if (categories) {
      const categoriesId = Array.isArray(categories)
        ? categories.map((id: string) => parseInt(id))
        : [parseInt(categories as string)];
      qb.andWhere('item.categoria_id IN (:...categories)', {
        categories: categoriesId,
      });
    }

    if (search) {
      qb.andWhere('(item.nombre LIKE :search OR item.codigo LIKE :search)', {
        search: `%${search}%`,
      });
    }

    const [data, total] = await qb.getManyAndCount();
    return {
      data,
      totalRecords: total,
    };
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) throw new NotFoundException(`Producto ${id} no encontrado`);
    return product;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
    file?: Express.Multer.File,
  ): Promise<Product> {
    if (updateProductDto.codigo != null) {
      await this.ensureCodigoIsUnique(updateProductDto.codigo, id);
    }
    const product = await this.productRepository.preload({
      id,
      ...updateProductDto,
    });

    if (!product) throw new Error('Producto no encontrado.');

    if (file) {
      product.imagen = `/images/${file.filename}`;
    } else if (updateProductDto.imagen) {
      if (!validator.isURL(updateProductDto.imagen)) {
        throw new BadRequestException('URL de imagen inválida.');
      }
      product.imagen = updateProductDto.imagen;
    }

    if (!product) throw new NotFoundException(`Producto ${id} no encontrado`);
    return this.productRepository.save(product);
  }

  async remove(id: number): Promise<string> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) throw new Error('Producto no encontrado.');

    if (product.imagen && product.imagen.startsWith('/images/')) {
      const imagePath = path.join(__dirname, '../../public', product.imagen);
      try {
        await fs.unlink(imagePath);
      } catch (err) {
        console.error('Error al eliminar la imagen:', err);
      }
    }

    await this.productRepository.remove(product);
    return `Producto ${id} eliminado correctamente`;
  }
  private async ensureCodigoIsUnique(
    codigo: number,
    idProduct?: number,
  ): Promise<void> {
    const existing = await this.productRepository.findOneBy({ codigo });
    if (existing && existing.id !== idProduct) {
      throw new BadRequestException('Ya existe un producto con ese código');
    }
  }
}
