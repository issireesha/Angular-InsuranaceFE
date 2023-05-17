import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalplansComponent } from './medicalplans.component';

describe('MedicalplansComponent', () => {
  let component: MedicalplansComponent;
  let fixture: ComponentFixture<MedicalplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
