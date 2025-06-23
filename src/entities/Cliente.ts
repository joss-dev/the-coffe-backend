// import {
//   Column,
//   Entity,
//   Index,
//   JoinColumn,
//   ManyToOne,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { Cafeteria } from "./Cafeteria";
// import { Pedido } from "./Pedido";

// @Index("cafeteria_id", ["cafeteriaId"], {})
// @Entity("cliente", { schema: "nestdb" })
// export class Cliente {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("int", { name: "cafeteria_id" })
//   cafeteriaId: number;

//   @Column("varchar", { name: "nombre", nullable: true, length: 100 })
//   nombre: string | null;

//   @Column("varchar", { name: "domicilio", nullable: true, length: 200 })
//   domicilio: string | null;

//   @Column("varchar", { name: "dni", nullable: true, length: 20 })
//   dni: string | null;

//   @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.clientes, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
//   cafeteria: Cafeteria;

//   @OneToMany(() => Pedido, (pedido) => pedido.cliente)
//   pedidos: Pedido[];
// }
