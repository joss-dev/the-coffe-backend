import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ManyToOne } from "typeorm";
import { JoinColumn } from "typeorm";
import { Product } from '../../products/entities/product.entity';
import { Cafeteria } from '../../cafeteria/entities/cafeteria.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @OneToMany(() => Product, (product) => product.categoria)
  products: Product[];

  @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.categorias, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
  cafeteria: Cafeteria;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date;

}
