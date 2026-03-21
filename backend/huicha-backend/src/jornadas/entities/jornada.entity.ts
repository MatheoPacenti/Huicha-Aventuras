import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plan } from '../../plans/plans.entity';
@Entity()
export class Jornada {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  duracionHoras: number;

  @Column()
  incluye: string;

  @ManyToOne(() => Plan, (plan) => plan.jornadas, {
    onDelete: 'CASCADE',
  })
  plan: Plan;
}