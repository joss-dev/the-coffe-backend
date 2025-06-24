// import {
//   Column,
//   Entity,
//   Index,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { Products } from "./Products";

// @Index("IDX_8053c619b9d0eaebeeeae2a0be", ["nombre"], { unique: true })
// @Entity("categories", { schema: "nestdb" })
// export class Categories {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("varchar", { name: "nombre", unique: true, length: 255 })
//   nombre: string;

//   @Column("timestamp", {
//     name: "created_at",
//     default: () => "CURRENT_TIMESTAMP",
//   })
//   createdAt: Date;

//   @OneToMany(() => Products, (products) => products.categoria)
//   products: Products[];
// }
