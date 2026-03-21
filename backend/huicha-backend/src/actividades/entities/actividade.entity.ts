import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Actividade {
  @PrimaryGeneratedColumn()
  id: number;

  // Use larger length for activity names (e.g. 'Kayak', 'Senderismo', etc.)
  @Column({ length: 255, nullable: true })
  nombre: string;

  @Column({ nullable: true })
  imagen?: string;

  @Column({ nullable: true })
  icon?: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;
}

