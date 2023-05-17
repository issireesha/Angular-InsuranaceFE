import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpendingInsuranceComponent } from './userpending-insurance.component';

describe('UserpendingInsuranceComponent', () => {
  let component: UserpendingInsuranceComponent;
  let fixture: ComponentFixture<UserpendingInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpendingInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpendingInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
