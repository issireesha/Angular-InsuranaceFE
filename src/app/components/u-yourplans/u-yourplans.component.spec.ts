import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UYourplansComponent } from './u-yourplans.component';

describe('UYourplansComponent', () => {
  let component: UYourplansComponent;
  let fixture: ComponentFixture<UYourplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UYourplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UYourplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
