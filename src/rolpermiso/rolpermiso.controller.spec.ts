import { Test, TestingModule } from '@nestjs/testing';
import { RolpermisoController } from './rolpermiso.controller';
import { RolpermisoService } from './rolpermiso.service';

describe('RolpermisoController', () => {
  let controller: RolpermisoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolpermisoController],
      providers: [RolpermisoService],
    }).compile();

    controller = module.get<RolpermisoController>(RolpermisoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
