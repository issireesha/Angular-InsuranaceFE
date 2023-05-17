import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalplandataComponent } from './medicalplandata.component';

describe('MedicalplandataComponent', () => {
  let component: MedicalplandataComponent;
  let fixture: ComponentFixture<MedicalplandataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalplandataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalplandataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
