import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedentalplansformComponent } from './updatedentalplansform.component';

describe('UpdatedentalplansformComponent', () => {
  let component: UpdatedentalplansformComponent;
  let fixture: ComponentFixture<UpdatedentalplansformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedentalplansformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedentalplansformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
