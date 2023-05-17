import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedicalplanformComponent } from './addmedicalplanform.component';

describe('AddmedicalplanformComponent', () => {
  let component: AddmedicalplanformComponent;
  let fixture: ComponentFixture<AddmedicalplanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmedicalplanformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmedicalplanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
