import { Test, TestingModule } from '@nestjs/testing';
import { RolpermisoService } from './rolpermiso.service';

describe('RolpermisoService', () => {
  let service: RolpermisoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolpermisoService],
    }).compile();

    service = module.get<RolpermisoService>(RolpermisoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
