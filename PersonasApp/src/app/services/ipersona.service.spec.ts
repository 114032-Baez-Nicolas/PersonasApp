import { TestBed } from '@angular/core/testing';

import { IPersonaService } from './ipersona.service';

describe('IPersonaService', () => {
  let service: IPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
