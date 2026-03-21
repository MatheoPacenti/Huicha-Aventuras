import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { v2 as cloudinary } from 'cloudinary';
import { Repository } from 'typeorm';

import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { Actividade } from './entities/actividade.entity';

@Injectable()
export class ActividadesService {
  constructor(
    @InjectRepository(Actividade)
    private readonly actividadesRepository: Repository<Actividade>,
    private configService: ConfigService,
  ) {
    // Configurar Cloudinary al inicializar el servicio
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
      secure: true,
    });
  }

  private uploadToCloudinary(file: any, folder: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'image',
          format: 'png',
        },
        (error, result) => {
          if (error || !result) {
            return reject(error || new Error('Resultado de Cloudinary no válido'));
          }
          resolve(result.secure_url);
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  async create(
    data: CreateActividadeDto,
    imageFile?: any,
    iconFile?: any,
  ) {
    if (!data.nombre) {
      throw new Error('El nombre de la actividad es requerido');
    }

    const imagenUrl = imageFile
      ? await this.uploadToCloudinary(imageFile, 'actividades')
      : undefined;
    const iconUrl = iconFile
      ? await this.uploadToCloudinary(iconFile, 'actividades')
      : undefined;

    const actividad = this.actividadesRepository.create({
      nombre: data.nombre,
      imagen: imagenUrl ?? undefined,
      icon: iconUrl ?? undefined,
      descripcion: data.descripcion ?? undefined,
    });

    if (!actividad) {
      throw new Error('Error al crear la actividad');
    }

    return this.actividadesRepository.save(actividad);
  }

  findAll() {
    return this.actividadesRepository.find();
  }

  async findOne(id: number) {
    const actividad = await this.actividadesRepository.findOne({ where: { id } });

    if (!actividad) {
      throw new NotFoundException('Actividad no encontrada');
    }

    return actividad;
  }

  async update(
    id: number,
    updateActividadeDto: UpdateActividadeDto,
    imageFile?: any,
    iconFile?: any,
  ) {
    const actividadExistente = await this.actividadesRepository.findOne({ where: { id } });

    if (!actividadExistente) {
      throw new NotFoundException('Actividad no encontrada');
    }

    const imagenUrl = imageFile
      ? await this.uploadToCloudinary(imageFile, 'actividades')
      : actividadExistente.imagen;

    const iconUrl = iconFile
      ? await this.uploadToCloudinary(iconFile, 'actividades')
      : actividadExistente.icon;

    const actividad = await this.actividadesRepository.preload({
      id,
      ...updateActividadeDto,
      imagen: imagenUrl,
      icon: iconUrl,
    });

    if (!actividad) {
      throw new NotFoundException('Actividad no encontrada durante actualización');
    }

    return this.actividadesRepository.save(actividad);
  }

  async remove(id: number) {
    const actividad = await this.actividadesRepository.findOne({ where: { id } });

    if (!actividad) {
      throw new NotFoundException('Actividad no encontrada');
    }

    await this.actividadesRepository.delete(id);
    return { message: 'Actividad eliminada correctamente' };
  }
}
