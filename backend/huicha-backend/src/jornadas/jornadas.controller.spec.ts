import { Test, TestingModule } from '@nestjs/testing';
import { JornadasController } from './jornadas.controller';
import { JornadasService } from './jornadas.service';

describe('JornadasController', () => {
  let controller: JornadasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JornadasController],
      providers: [JornadasService],
    }).compile();

    controller = module.get<JornadasController>(JornadasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
