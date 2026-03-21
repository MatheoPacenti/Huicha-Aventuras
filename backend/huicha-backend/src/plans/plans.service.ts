import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './plans.entity';

@Injectable()
export class PlansService {

  constructor(
    @InjectRepository(Plan)
    private readonly planRepository: Repository<Plan>,
  ) {}

  async create(data: CreatePlanDto) {
    const plan = this.planRepository.create({
      nombre: data.nombre,
      descripcion: data.descripcion,
      duracion: data.duracion,
      capacidad: data.capacidad,
      precio: data.precio,
    });

    return await this.planRepository.save(plan);
  }

  findAll() {
    return this.planRepository.find({
      relations: ['jornadas'],
    });
  }

  findOne(id: number) {
    return this.planRepository.findOne({
      where: { id },
      relations: ['jornadas'],
    });
  }

  async update(id: number, data: UpdatePlanDto) {
    const plan = await this.planRepository.findOne({ where: { id } });

    if (!plan) {
      throw new NotFoundException('Plan no encontrado');
    }

    await this.planRepository.update(id, data);
    return await this.planRepository.findOne({
      where: { id },
      relations: ['jornadas'],
    });
  }

  async remove(id: number) {
    const plan = await this.planRepository.findOne({ where: { id } });

    if (!plan) {
      throw new NotFoundException('Plan no encontrado');
    }

    await this.planRepository.delete(id);
    return { message: 'Plan eliminado correctamente' };
  }
}