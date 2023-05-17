import { TestBed } from '@angular/core/testing';

import { PendinginsuranceService } from './pendinginsurance.service';

describe('PendinginsuranceService', () => {
  let service: PendinginsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendinginsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
