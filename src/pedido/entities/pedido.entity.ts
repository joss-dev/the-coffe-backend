import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DetallePedido } from '../../detallepedido/entities/detallepedido.entity';;
import { Cafeteria } from '../../cafeteria/entities/cafeteria.entity';
import { Mesa } from '../../mesa/entities/mesa.entity';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Mesero } from '../../mesero/entities/mesero.entity';
import { Usuario } from '../../users/entities/user.entity';

@Index("mesero_id", ["meseroId"], {})
@Index("cafeteria_id", ["cafeteriaId"], {})
@Index("mesa_id", ["mesaId"], {})
@Index("cliente_id", ["clienteId"], {})
@Index("usuario_id", ["usuarioId"], {})
@Entity("pedido", { schema: "nestdb" })
export class Pedido {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mesero_id", nullable: true })
  meseroId: number | null;

  @Column("int", { name: "cafeteria_id" })
  cafeteriaId: number;

  @Column("int", { name: "mesa_id", nullable: true })
  mesaId: number | null;

  @Column("int", { name: "cliente_id", nullable: true })
  clienteId: number | null;

  @Column("int", { name: "usuario_id", nullable: true })
  usuarioId: number | null;

  @Column("datetime", { name: "fecha_pedido" })
  fechaPedido: Date;

  @Column("varchar", { name: "estado", nullable: true, length: 50 })
  estado: string | null;

  @Column("decimal", {
    name: "monto_total",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  montoTotal: string | null;

  @OneToMany(() => DetallePedido, (detallePedido) => detallePedido.pedido)
  detallePedidos: DetallePedido[];

  @ManyToOne(() => Mesero, (mesero) => mesero.pedidos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "mesero_id", referencedColumnName: "id" }])
  mesero: Mesero;

  @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.pedidos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
  cafeteria: Cafeteria;

  @ManyToOne(() => Mesa, (mesa) => mesa.pedidos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "mesa_id", referencedColumnName: "id" }])
  mesa: Mesa;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cliente_id", referencedColumnName: "id" }])
  cliente: Cliente;

  @ManyToOne(() => Usuario, (usuario) => usuario.pedidos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: Usuario;
}
