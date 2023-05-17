import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddentalplanformComponent } from './adddentalplanform.component';

describe('AdddentalplanformComponent', () => {
  let component: AdddentalplanformComponent;
  let fixture: ComponentFixture<AdddentalplanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddentalplanformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddentalplanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
