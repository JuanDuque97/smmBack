import { TestBed } from '@angular/core/testing';

import { pedidosService } from './pedido.service';

describe('pedidosService', () => {
  let service: pedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
