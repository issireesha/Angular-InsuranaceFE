import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicalplanformComponent } from './updatemedicalplanform.component';

describe('UpdatemedicalplanformComponent', () => {
  let component: UpdatemedicalplanformComponent;
  let fixture: ComponentFixture<UpdatemedicalplanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemedicalplanformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemedicalplanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
