import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolPermiso } from "./RolPermiso";

@Entity("permiso", { schema: "nestdb" })
export class Permiso {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @Column("varchar", { name: "permiso", nullable: true, length: 100 })
  permiso: string | null;

  @OneToMany(() => RolPermiso, (rolPermiso) => rolPermiso.idPermiso2)
  rolPermisos: RolPermiso[];
}
