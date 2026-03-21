import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Actividade } from '../actividades/entities/actividade.entity';
import { Plan } from '../plans/plans.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservasRepository: Repository<Reserva>,
    @InjectRepository(Actividade)
    private readonly actividadesRepository: Repository<Actividade>,
    @InjectRepository(Plan)
    private readonly plansRepository: Repository<Plan>,
  ) {}

  async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    if (!createReservaDto.nombre || !createReservaDto.fecha || !createReservaDto.descripcion || !createReservaDto.profesores) {
      throw new Error('Campos requeridos faltantes');
    }
    if (!createReservaDto.actividades || createReservaDto.actividades.length === 0) {
      throw new Error('Una reserva debe tener al menos una actividad');
    }

    const actividades = await this.actividadesRepository.findByIds(createReservaDto.actividades);
    if (actividades.length !== createReservaDto.actividades.length) {
      throw new Error('Algunas actividades no existen');
    }

    let plan: Plan | null = null;
    if (createReservaDto.planId) {
      plan = await this.plansRepository.findOne({ where: { id: createReservaDto.planId } });
      if (!plan) {
        throw new Error('Plan no encontrado');
      }
    }

    const reserva = this.reservasRepository.create({
      ...createReservaDto,
      actividades,
      plan,
    });
    return this.reservasRepository.save(reserva);
  }

  async findAll(query?: { fecha?: string; estado?: string; nombre?: string }): Promise<Reserva[]> {
    const where: any = {};
    if (query?.fecha) {
      where.fecha = new Date(query.fecha);
    }
    if (query?.estado) {
      where.estado = query.estado;
    }
    if (query?.nombre) {
      where.nombre = Like(`%${query.nombre}%`);
    }

    return this.reservasRepository.find({
      where,
      relations: ['plan', 'actividades'],
    });
  }

  async findOne(id: number): Promise<Reserva> {
    const reserva = await this.reservasRepository.findOne({
      where: { id },
      relations: ['plan', 'actividades'],
    });
    if (!reserva) {
      throw new NotFoundException('Reserva no encontrada');
    }
    return reserva;
  }

  async update(id: number, updateReservaDto: UpdateReservaDto): Promise<Reserva> {
    const reserva = await this.reservasRepository.findOne({ where: { id }, relations: ['actividades', 'plan'] });
    if (!reserva) {
      throw new NotFoundException('Reserva no encontrada');
    }

    if (updateReservaDto.actividades) {
      const actividades = await this.actividadesRepository.findByIds(updateReservaDto.actividades);
      if (actividades.length !== updateReservaDto.actividades.length) {
        throw new Error('Algunas actividades no existen');
      }
      reserva.actividades = actividades;
    }

    if (updateReservaDto.planId !== undefined) {
      if (updateReservaDto.planId) {
        const plan = await this.plansRepository.findOne({ where: { id: updateReservaDto.planId } });
        if (!plan) {
          throw new Error('Plan no encontrado');
        }
        reserva.plan = plan;
      } else {
        reserva.plan = null;
      }
    }

    Object.assign(reserva, updateReservaDto);
    return this.reservasRepository.save(reserva);
  }

  async remove(id: number): Promise<{ message: string }> {
    const reserva = await this.reservasRepository.findOne({ where: { id } });
    if (!reserva) {
      throw new NotFoundException('Reserva no encontrada');
    }
    await this.reservasRepository.delete(id);
    return { message: 'Reserva eliminada correctamente' };
  }
}
