// import {
//   Column,
//   Entity,
//   Index,
//   JoinColumn,
//   ManyToOne,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { DetallePedido } from "./DetallePedido";
// import { Categoria } from "./Categoria";
// import { Cafeteria } from "./Cafeteria";

// @Index("categoria_id", ["categoriaId"], {})
// @Index("cafeteria_id", ["cafeteriaId"], {})
// @Entity("producto", { schema: "nestdb" })
// export class Producto {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("int", { name: "categoria_id" })
//   categoriaId: number;

//   @Column("int", { name: "cafeteria_id" })
//   cafeteriaId: number;

//   @Column("varchar", { name: "codigo", nullable: true, length: 50 })
//   codigo: string | null;

//   @Column("decimal", {
//     name: "precio",
//     nullable: true,
//     precision: 10,
//     scale: 2,
//   })
//   precio: string | null;

//   @Column("varchar", { name: "imagen", nullable: true, length: 255 })
//   imagen: string | null;

//   @Column("text", { name: "descripcion", nullable: true })
//   descripcion: string | null;

//   @Column("text", { name: "caracteristicas", nullable: true })
//   caracteristicas: string | null;

//   @Column("tinyint", {
//     name: "activo",
//     nullable: true,
//     width: 1,
//     default: () => "'1'",
//   })
//   activo: boolean | null;

//   @OneToMany(() => DetallePedido, (detallePedido) => detallePedido.producto)
//   detallePedidos: DetallePedido[];

//   @ManyToOne(() => Categoria, (categoria) => categoria.productos, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "categoria_id", referencedColumnName: "id" }])
//   categoria: Categoria;

//   @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.productos, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
//   cafeteria: Cafeteria;
// }
