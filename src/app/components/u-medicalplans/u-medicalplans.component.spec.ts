import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UMedicalplansComponent } from './u-medicalplans.component';

describe('UMedicalplansComponent', () => {
  let component: UMedicalplansComponent;
  let fixture: ComponentFixture<UMedicalplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UMedicalplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UMedicalplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
