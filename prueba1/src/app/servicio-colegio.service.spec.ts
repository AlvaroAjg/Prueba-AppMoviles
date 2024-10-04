import { TestBed } from '@angular/core/testing';

import { ServicioColegioService } from './servicio-colegio.service';

describe('ServicioColegioService', () => {
  let service: ServicioColegioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioColegioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
