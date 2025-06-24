// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { ServicioPago } from "./ServicioPago";

// @Entity("servicio", { schema: "nestdb" })
// export class Servicio {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("varchar", { name: "nombre", length: 100 })
//   nombre: string;

//   @Column("decimal", {
//     name: "precio",
//     nullable: true,
//     precision: 10,
//     scale: 2,
//   })
//   precio: string | null;

//   @Column("text", { name: "caracteristicas", nullable: true })
//   caracteristicas: string | null;

//   @Column("int", { name: "limite_productos", nullable: true })
//   limiteProductos: number | null;

//   @Column("int", { name: "limite_usuarios", nullable: true })
//   limiteUsuarios: number | null;

//   @Column("int", { name: "limite_meseros", nullable: true })
//   limiteMeseros: number | null;

//   @OneToMany(() => ServicioPago, (servicioPago) => servicioPago.servicio)
//   servicioPagos: ServicioPago[];
// }
