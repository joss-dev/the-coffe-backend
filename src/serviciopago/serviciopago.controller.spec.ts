import { Test, TestingModule } from '@nestjs/testing';
import { ServiciopagoController } from './serviciopago.controller';
import { ServiciopagoService } from './serviciopago.service';

describe('ServiciopagoController', () => {
  let controller: ServiciopagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiciopagoController],
      providers: [ServiciopagoService],
    }).compile();

    controller = module.get<ServiciopagoController>(ServiciopagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
