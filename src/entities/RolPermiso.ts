// import {
//   Column,
//   Entity,
//   Index,
//   JoinColumn,
//   ManyToOne,
//   PrimaryGeneratedColumn,
// } from "typeorm";
// import { Rol } from "./Rol";
// import { Permiso } from "./Permiso";

// @Index("id_rol", ["idRol"], {})
// @Index("id_permiso", ["idPermiso"], {})
// @Entity("rol_permiso", { schema: "nestdb" })
// export class RolPermiso {
//   @PrimaryGeneratedColumn({ type: "int", name: "id" })
//   id: number;

//   @Column("int", { name: "id_rol" })
//   idRol: number;

//   @Column("int", { name: "id_permiso" })
//   idPermiso: number;

//   @ManyToOne(() => Rol, (rol) => rol.rolPermisos, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "id_rol", referencedColumnName: "id" }])
//   idRol2: Rol;

//   @ManyToOne(() => Permiso, (permiso) => permiso.rolPermisos, {
//     onDelete: "RESTRICT",
//     onUpdate: "RESTRICT",
//   })
//   @JoinColumn([{ name: "id_permiso", referencedColumnName: "id" }])
//   idPermiso2: Permiso;
// }
