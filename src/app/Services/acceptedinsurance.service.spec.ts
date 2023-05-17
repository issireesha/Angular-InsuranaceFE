import { TestBed } from '@angular/core/testing';

import { AcceptedinsuranceService } from './acceptedinsurance.service';

describe('AcceptedinsuranceService', () => {
  let service: AcceptedinsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptedinsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
