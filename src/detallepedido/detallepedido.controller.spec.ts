import { Test, TestingModule } from '@nestjs/testing';
import { DetallepedidoController } from './detallepedido.controller';
import { DetallepedidoService } from './detallepedido.service';

describe('DetallepedidoController', () => {
  let controller: DetallepedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallepedidoController],
      providers: [DetallepedidoService],
    }).compile();

    controller = module.get<DetallepedidoController>(DetallepedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
