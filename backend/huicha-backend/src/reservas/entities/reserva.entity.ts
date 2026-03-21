import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Actividade } from '../../actividades/entities/actividade.entity';
import { Plan } from '../../plans/plans.entity';

export enum EstadoReserva {
  PENDIENTE = 'pendiente',
  RESERVADO = 'reservado',
  PAGADO = 'pagado',
}

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @ManyToOne(() => Plan, { nullable: true })
  plan: Plan | null;

  @Column({ nullable: true })
  duracion: string; // Formato "2:30" o "2:15"

  @Column({ type: 'text' })
  descripcion: string;

  @Column()
  profesores: string; // Nombres separados por coma

  @Column({
    type: 'enum',
    enum: EstadoReserva,
    default: EstadoReserva.PENDIENTE,
  })
  estado: EstadoReserva;

  @ManyToMany(() => Actividade, { cascade: true })
  @JoinTable({
    name: 'reserva_actividades',
    joinColumn: { name: 'id_reserva', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'id_actividad', referencedColumnName: 'id' },
  })
  actividades: Actividade[];
}
