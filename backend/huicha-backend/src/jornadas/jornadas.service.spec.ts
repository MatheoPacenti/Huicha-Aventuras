import { Test, TestingModule } from '@nestjs/testing';
import { JornadasService } from './jornadas.service';

describe('JornadasService', () => {
  let service: JornadasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JornadasService],
    }).compile();

    service = module.get<JornadasService>(JornadasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
