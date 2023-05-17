import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalplansComponent } from './dentalplans.component';

describe('DentalplansComponent', () => {
  let component: DentalplansComponent;
  let fixture: ComponentFixture<DentalplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
