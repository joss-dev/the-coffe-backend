import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Categoria } from "./Categoria";
// import { Cliente } from "./Cliente";
// import { Mesero } from "./Mesero";
// import { Pedido } from "./Pedido";
// import { Product } from '../../products/entities/product.entity';
// import { Sala } from "./Sala";
// import { ServicioPago } from "./ServicioPago";
// import { Usuario } from "./Usuario";

@Entity("cafeteria", { schema: "nestdb" })
export class Cafeteria {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre: string;

//   @OneToMany(() => Categoria, (categoria) => categoria.cafeteria)
//   categorias: Categoria[];

//   @OneToMany(() => Cliente, (cliente) => cliente.cafeteria)
//   clientes: Cliente[];

//   @OneToMany(() => Mesero, (mesero) => mesero.cafeteria)
//   meseros: Mesero[];

//   @OneToMany(() => Pedido, (pedido) => pedido.cafeteria)
//   pedidos: Pedido[];

//   @OneToMany(() => Product, (product) => product.cafeteria)
//   productos: Product[];

//   @OneToMany(() => Sala, (sala) => sala.cafeteria)
//   salas: Sala[];

//   @OneToMany(() => ServicioPago, (servicioPago) => servicioPago.cafeteria)
//   servicioPagos: ServicioPago[];

//   @OneToMany(() => Usuario, (usuario) => usuario.cafeteria)
//   usuarios: Usuario[];
}
