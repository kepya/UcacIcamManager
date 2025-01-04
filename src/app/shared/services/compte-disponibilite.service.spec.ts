import { TestBed } from '@angular/core/testing';

import { CompteDisponibiliteService } from './compte-disponibilite.service';

describe('CompteDisponibiliteService', () => {
  let service: CompteDisponibiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteDisponibiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
