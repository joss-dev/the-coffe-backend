import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm";
import { JoinColumn } from "typeorm";
import { Category } from '../../category/entities/category.entity';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Mesero } from '../../mesero/entities/mesero.entity';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Product } from '../../products/entities/product.entity';
import { Sala } from '../../sala/entities/sala.entity';
import { Serviciopago } from '../../serviciopago/entities/serviciopago.entity';
import { User } from '../../users/entities/user.entity';

@Entity("cafeteria", { schema: "nestdb" })
export class Cafeteria {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre: string;

  @OneToMany(() => Category, (category) => category.cafeteria)
  categorias: Category[];

  @OneToMany(() => Cliente, (cliente) => cliente.cafeteria)
  clientes: Cliente[];

  @OneToMany(() => Mesero, (mesero) => mesero.cafeteria)
  meseros: Mesero[];

  @OneToMany(() => Pedido, (pedido) => pedido.cafeteria)
  pedidos: Pedido[];

  @OneToMany(() => Product, (product) => product.cafeteria)
  productos: Product[];

  @OneToMany(() => Sala, (sala) => sala.cafeteria)
  salas: Sala[];

  @OneToMany(() => Serviciopago, (servicioPago) => servicioPago.cafeteria)
  servicioPagos: Serviciopago[];

  @OneToMany(() => User, (user) => user.cafeteria)
  usuarios: User[];
}
