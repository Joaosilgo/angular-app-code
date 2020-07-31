import { TestBed } from '@angular/core/testing';

import { ObjectoService } from './objecto.service';

describe('ObjectoService', () => {
  let service: ObjectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
