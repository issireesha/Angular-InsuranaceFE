import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfeedbackdialogComponent } from './adminfeedbackdialog.component';

describe('AdminfeedbackdialogComponent', () => {
  let component: AdminfeedbackdialogComponent;
  let fixture: ComponentFixture<AdminfeedbackdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfeedbackdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfeedbackdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
