import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rolpermiso } from './../rolpermiso/entities/rolpermiso.entity';

@Entity("permiso", { schema: "nestdb" })
export class Permiso {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @Column("varchar", { name: "permiso", nullable: true, length: 100 })
  permiso: string | null;

  @OneToMany(() => Rolpermiso, (rolPermiso) => rolPermiso.id_permiso)
  rolPermisos: Rolpermiso[];
}
