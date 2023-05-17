import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermedicalplansComponent } from './usermedicalplans.component';

describe('UsermedicalplansComponent', () => {
  let component: UsermedicalplansComponent;
  let fixture: ComponentFixture<UsermedicalplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermedicalplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermedicalplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
