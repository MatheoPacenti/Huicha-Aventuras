import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from '../plans/plans.entity';
import { CreateJornadaDto } from './dto/create-jornada.dto';
import { UpdateJornadaDto } from './dto/update-jornada.dto';
import { Jornada } from './entities/jornada.entity';

@Injectable()
export class JornadasService {

  constructor(
    @InjectRepository(Jornada)
    private readonly jornadaRepository: Repository<Jornada>,

    @InjectRepository(Plan)
    private readonly planRepository: Repository<Plan>,
  ) {}

  // ✅ CREAR JORNADA
  async create(createJornadaDto: CreateJornadaDto) {
    const { planId, ...data } = createJornadaDto;

    const plan = await this.planRepository.findOne({
      where: { id: planId },
    });

    if (!plan) {
      throw new NotFoundException('El plan no existe');
    }

    const jornada = this.jornadaRepository.create({
      ...data,
      plan,
    });

    return await this.jornadaRepository.save(jornada);
  }

  // ✅ OBTENER TODAS
  async findAll() {
    return await this.jornadaRepository.find({
      relations: ['plan'],
    });
  }

  // ✅ OBTENER UNA
  async findOne(id: number) {
    const jornada = await this.jornadaRepository.findOne({
      where: { id },
      relations: ['plan'],
    });

    if (!jornada) {
      throw new NotFoundException('Jornada no encontrada');
    }

    return jornada;
  }

  // ✅ ACTUALIZAR
  async update(id: number, updateJornadaDto: UpdateJornadaDto) {
    const jornada = await this.jornadaRepository.findOne({
      where: { id },
      relations: ['plan'],
    });

    if (!jornada) {
      throw new NotFoundException('Jornada no encontrada');
    }

    const { planId, ...updateData } = updateJornadaDto;

    // Si vienen cambios de plan
    if (planId) {
      const plan = await this.planRepository.findOne({
        where: { id: planId },
      });

      if (!plan) {
        throw new NotFoundException('El nuevo plan no existe');
      }

      jornada.plan = plan;
    }

    Object.assign(jornada, updateData);

    return await this.jornadaRepository.save(jornada);
  }

  // ✅ ELIMINAR
  async remove(id: number) {
    const jornada = await this.jornadaRepository.findOne({
      where: { id },
    });

    if (!jornada) {
      throw new NotFoundException('Jornada no encontrada');
    }

    await this.jornadaRepository.delete(id);

    return { message: 'Jornada eliminada correctamente' };
  }
}