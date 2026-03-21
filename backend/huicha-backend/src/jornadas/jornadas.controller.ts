import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateJornadaDto } from './dto/create-jornada.dto';
import { UpdateJornadaDto } from './dto/update-jornada.dto';
import { JornadasService } from './jornadas.service';

@Controller('jornadas')
export class JornadasController {
  constructor(private readonly jornadasService: JornadasService) {}

  @Post()
  create(@Body() createJornadaDto: CreateJornadaDto) {
    return this.jornadasService.create(createJornadaDto);
  }

  @Get()
findAll() {
  return this.jornadasService.findAll();
}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jornadasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJornadaDto: UpdateJornadaDto) {
    return this.jornadasService.update(+id, updateJornadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jornadasService.remove(+id);
  }
}
