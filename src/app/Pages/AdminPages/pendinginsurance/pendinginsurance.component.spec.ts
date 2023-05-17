import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendinginsuranceComponent } from './pendinginsurance.component';

describe('PendinginsuranceComponent', () => {
  let component: PendinginsuranceComponent;
  let fixture: ComponentFixture<PendinginsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendinginsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendinginsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
