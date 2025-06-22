import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./Categoria";
import { Cliente } from "./Cliente";
import { Mesero } from "./Mesero";
import { Pedido } from "./Pedido";
import { Producto } from "./Producto";
import { Sala } from "./Sala";
import { ServicioPago } from "./ServicioPago";
import { Usuario } from "./Usuario";

@Entity("cafeteria", { schema: "nestdb" })
export class Cafeteria {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre: string;

  @OneToMany(() => Categoria, (categoria) => categoria.cafeteria)
  categorias: Categoria[];

  @OneToMany(() => Cliente, (cliente) => cliente.cafeteria)
  clientes: Cliente[];

  @OneToMany(() => Mesero, (mesero) => mesero.cafeteria)
  meseros: Mesero[];

  @OneToMany(() => Pedido, (pedido) => pedido.cafeteria)
  pedidos: Pedido[];

  @OneToMany(() => Producto, (producto) => producto.cafeteria)
  productos: Producto[];

  @OneToMany(() => Sala, (sala) => sala.cafeteria)
  salas: Sala[];

  @OneToMany(() => ServicioPago, (servicioPago) => servicioPago.cafeteria)
  servicioPagos: ServicioPago[];

  @OneToMany(() => Usuario, (usuario) => usuario.cafeteria)
  usuarios: Usuario[];
}
