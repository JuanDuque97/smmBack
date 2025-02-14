import { TestBed } from '@angular/core/testing';

import { seguridadService } from './seguridad.service';

describe('seguridadService', () => {
  let service: seguridadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(seguridadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
