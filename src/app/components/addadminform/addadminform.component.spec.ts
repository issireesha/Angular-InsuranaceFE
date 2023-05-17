import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadminformComponent } from './addadminform.component';

describe('AddadminformComponent', () => {
  let component: AddadminformComponent;
  let fixture: ComponentFixture<AddadminformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadminformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadminformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
