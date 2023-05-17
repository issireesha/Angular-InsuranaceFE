import { TestBed } from '@angular/core/testing';

import { MedicalplanService } from './medicalplan.service';

describe('MedicalplanService', () => {
  let service: MedicalplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
