import { TestBed } from '@angular/core/testing';

import { CadastreService } from './cadastre.service';

describe('CatastroService', () => {
  let service: CadastreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
