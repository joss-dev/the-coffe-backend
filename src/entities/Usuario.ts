// import {
//   Column,
//   Entity,
//   Index,
//   JoinColumn,
//   ManyToOne,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { Pedido } from "./Pedido";
// import { Cafeteria } from "./Cafeteria";
// import { Rol } from "./Rol";

// @Index("cafeteria_id", ["cafeteriaId"], {})
// @Index("rol_id", ["rolId"], {})
// @Entity("usuario", { schema: "nestdb" })
// export class Usuario {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("int", { name: "cafeteria_id" })
//   cafeteriaId: number;

//   @Column("int", { name: "rol_id" })
//   rolId: number;

//   @Column("varchar", { name: "email", length: 100 })
//   email: string;

//   @Column("varchar", { name: "nombre", nullable: true, length: 100 })
//   nombre: string | null;

//   @Column("varchar", { name: "contraseña", nullable: true, length: 255 })
//   contraseA: string | null;

//   @OneToMany(() => Pedido, (pedido) => pedido.usuario)
//   pedidos: Pedido[];

//   @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.usuarios, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
//   cafeteria: Cafeteria;

//   @ManyToOne(() => Rol, (rol) => rol.usuarios, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "rol_id", referencedColumnName: "id" }])
//   rol: Rol;
// }
