import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cafeteria } from '../../cafeteria/entities/cafeteria.entity';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Index("cafeteria_id", ["cafeteriaId"], {})
@Entity("mesero", { schema: "nestdb" })
export class Mesero {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cafeteria_id" })
  cafeteriaId: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @Column("varchar", { name: "telefono", nullable: true, length: 20 })
  telefono: string | null;

  @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.meseros, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
  cafeteria: Cafeteria;

  @OneToMany(() => Pedido, (pedido) => pedido.mesero)
  pedidos: Pedido[];
}
