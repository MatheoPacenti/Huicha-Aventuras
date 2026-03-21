import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Jornada } from '../jornadas/entities/jornada.entity';

@Entity()
export class Plan {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({ nullable: true })
  duracion: number;

  @Column({ nullable: true })
  capacidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  precio: number;

  @OneToMany(() => Jornada, (jornada) => jornada.plan, {
    cascade: true,
  })
  jornadas: Jornada[];
}