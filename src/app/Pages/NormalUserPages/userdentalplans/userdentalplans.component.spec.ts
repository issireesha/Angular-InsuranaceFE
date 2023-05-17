import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdentalplansComponent } from './userdentalplans.component';

describe('UserdentalplansComponent', () => {
  let component: UserdentalplansComponent;
  let fixture: ComponentFixture<UserdentalplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdentalplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdentalplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
