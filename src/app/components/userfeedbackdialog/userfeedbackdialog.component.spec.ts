import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeedbackdialogComponent } from './userfeedbackdialog.component';

describe('UserfeedbackdialogComponent', () => {
  let component: UserfeedbackdialogComponent;
  let fixture: ComponentFixture<UserfeedbackdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfeedbackdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfeedbackdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
