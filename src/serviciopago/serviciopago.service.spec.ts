import { Test, TestingModule } from '@nestjs/testing';
import { ServiciopagoService } from './serviciopago.service';

describe('ServiciopagoService', () => {
  let service: ServiciopagoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiciopagoService],
    }).compile();

    service = module.get<ServiciopagoService>(ServiciopagoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
