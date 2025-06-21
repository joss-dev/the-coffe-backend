import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  codigo?: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  @JoinColumn({ name: 'categoria_id' })
  categoria: Category;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ nullable: true })
  imagen?: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  costo?: number;

  @Column({ default: true })
  activo: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
