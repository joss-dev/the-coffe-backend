import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cafeteria } from '../../cafeteria/entities/cafeteria.entity';
import { Servicio } from '../../servicio/entities/servicio.entity';

@Index("cafeteria_id", ["cafeteriaId"], {})
@Index("servicio_id", ["servicioId"], {})
@Entity("servicio_pago", { schema: "nestdb" })
export class ServicioPago {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "cafeteria_id" })
  cafeteriaId: number;

  @Column("int", { name: "servicio_id" })
  servicioId: number;

  @Column("date", { name: "fecha_pago" })
  fechaPago: string;

  @Column("date", { name: "fecha_vencimiento" })
  fechaVencimiento: string;

  @Column("decimal", {
    name: "monto_recibido",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  montoRecibido: string | null;

  @Column("decimal", {
    name: "monto_cobrado",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  montoCobrado: string | null;

  @ManyToOne(() => Cafeteria, (cafeteria) => cafeteria.servicioPagos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cafeteria_id", referencedColumnName: "id" }])
  cafeteria: Cafeteria;

  @ManyToOne(() => Servicio, (servicio) => servicio.servicioPagos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "servicio_id", referencedColumnName: "id" }])
  servicio: Servicio;
}
