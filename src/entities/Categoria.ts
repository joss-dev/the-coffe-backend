import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cafeteria } from "./Cafeteria";
import { Producto } from "./Producto";

@Index("cafeteria_id", ["cafeteriaId"], {})
@Entity("categoria", { schema: "nestdb" })
export class Categoria {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cafeteria_id" })
  cafeteriaId: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre: string;

  @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.categorias, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
  cafeteria: Cafeteria;

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];
}
