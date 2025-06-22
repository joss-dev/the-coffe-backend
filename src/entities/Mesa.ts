import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sala } from "./Sala";
import { Pedido } from "./Pedido";

@Index("sala_id", ["salaId"], {})
@Entity("mesa", { schema: "nestdb" })
export class Mesa {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "sala_id" })
  salaId: number;

  @Column("int", { name: "nro_mesa" })
  nroMesa: number;

  @ManyToOne(() => Sala, (sala) => sala.mesas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "sala_id", referencedColumnName: "id" }])
  sala: Sala;

  @OneToMany(() => Pedido, (pedido) => pedido.mesa)
  pedidos: Pedido[];
}
