import { TestBed } from '@angular/core/testing';

import { DentalplanService } from './dentalplan.service';

describe('DentalplanService', () => {
  let service: DentalplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DentalplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
