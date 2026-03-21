import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { ActividadesService } from './actividades.service';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';

@Controller('actividades')
export class ActividadesController {
  constructor(private readonly actividadesService: ActividadesService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'imagen', maxCount: 1 },
        { name: 'icon', maxCount: 1 },
      ],
      {
        storage: multer.memoryStorage(),
      },
    ),
  )

  create(
    @Body() createActividadeDto: CreateActividadeDto,
    @UploadedFiles()
    files: { imagen?: any[]; icon?: any[] },
  ) {
    const imagenFile = files?.imagen?.[0];
    const iconFile = files?.icon?.[0];
    return this.actividadesService.create(createActividadeDto, imagenFile, iconFile);
  }

  @Get()
  findAll() {
    return this.actividadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actividadesService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'imagen', maxCount: 1 },
        { name: 'icon', maxCount: 1 },
      ],
      {
        storage: multer.memoryStorage(),
      },
    ),
  )
  update(
    @Param('id') id: string,
    @Body() updateActividadeDto: UpdateActividadeDto,
    @UploadedFiles()
    files: { imagen?: any[]; icon?: any[] },
  ) {
    const imagenFile = files?.imagen?.[0];
    const iconFile = files?.icon?.[0];
    return this.actividadesService.update(+id, updateActividadeDto, imagenFile, iconFile);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actividadesService.remove(+id);
  }
}
