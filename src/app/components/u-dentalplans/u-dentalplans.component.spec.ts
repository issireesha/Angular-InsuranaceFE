import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDentalplansComponent } from './u-dentalplans.component';

describe('UDentalplansComponent', () => {
  let component: UDentalplansComponent;
  let fixture: ComponentFixture<UDentalplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UDentalplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UDentalplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
