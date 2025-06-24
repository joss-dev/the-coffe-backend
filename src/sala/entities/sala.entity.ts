import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cafeteria } from '../../cafeteria/entities/cafeteria.entity';
import { Mesa } from '../../mesa/entities/mesa.entity';

@Index("cafeteria_id", ["cafeteriaId"], {})
@Entity("sala", { schema: "nestdb" })
export class Sala {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cafeteria_id" })
  cafeteriaId: number;

  @Column("varchar", { name: "nombre", nullable: true, length: 100 })
  nombre: string | null;

  @OneToMany(() => Mesa, (mesa) => mesa.sala)
  mesas: Mesa[];

  @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.salas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
  cafeteria: Cafeteria;
}
