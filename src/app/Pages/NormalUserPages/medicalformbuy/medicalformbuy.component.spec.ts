import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalformbuyComponent } from './medicalformbuy.component';

describe('MedicalformbuyComponent', () => {
  let component: MedicalformbuyComponent;
  let fixture: ComponentFixture<MedicalformbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalformbuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalformbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
