import { Test, TestingModule } from '@nestjs/testing';
import { DetallepedidoService } from './detallepedido.service';

describe('DetallepedidoService', () => {
  let service: DetallepedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallepedidoService],
    }).compile();

    service = module.get<DetallepedidoService>(DetallepedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
