import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolPermiso } from "./RolPermiso";
import { Usuario } from "./Usuario";

@Entity("rol", { schema: "nestdb" })
export class Rol {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 50 })
  nombre: string | null;

  @OneToMany(() => RolPermiso, (rolPermiso) => rolPermiso.idRol2)
  rolPermisos: RolPermiso[];

  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios: Usuario[];
}
