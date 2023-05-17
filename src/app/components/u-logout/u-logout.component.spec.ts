import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ULogoutComponent } from './u-logout.component';

describe('ULogoutComponent', () => {
  let component: ULogoutComponent;
  let fixture: ComponentFixture<ULogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ULogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ULogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
