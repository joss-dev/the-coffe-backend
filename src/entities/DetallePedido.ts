// import {
//   Column,
//   Entity,
//   Index,
//   JoinColumn,
//   ManyToOne,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { Pedido } from "./Pedido";
// import { Producto } from "./Producto";

// @Index("pedido_id", ["pedidoId"], {})
// @Index("producto_id", ["productoId"], {})
// @Entity("detalle_pedido", { schema: "nestdb" })
// export class DetallePedido {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("int", { name: "pedido_id" })
//   pedidoId: number;

//   @Column("int", { name: "producto_id" })
//   productoId: number;

//   @Column("decimal", {
//     name: "precio_unitario",
//     nullable: true,
//     precision: 10,
//     scale: 2,
//   })
//   precioUnitario: string | null;

//   @Column("int", { name: "cantidad", nullable: true })
//   cantidad: number | null;

//   @Column("decimal", {
//     name: "subtotal",
//     nullable: true,
//     precision: 10,
//     scale: 2,
//   })
//   subtotal: string | null;

//   @Column("varchar", { name: "estado", nullable: true, length: 50 })
//   estado: string | null;

//   @Column("varchar", { name: "forma_pago", nullable: true, length: 50 })
//   formaPago: string | null;

//   @ManyToOne(() => Pedido, (pedido) => pedido.detallePedidos, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "pedido_id", referencedColumnName: "id" }])
//   pedido: Pedido;

//   @ManyToOne(() => Producto, (producto) => producto.detallePedidos, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "producto_id", referencedColumnName: "id" }])
//   producto: Producto;
// }
