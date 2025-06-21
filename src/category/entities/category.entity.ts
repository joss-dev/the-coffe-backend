import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @OneToMany(() => Product, (product) => product.categoria)
  products: Product[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
