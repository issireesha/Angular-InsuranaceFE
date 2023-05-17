import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubmittedComponent } from './viewsubmitted.component';

describe('ViewsubmittedComponent', () => {
  let component: ViewsubmittedComponent;
  let fixture: ComponentFixture<ViewsubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsubmittedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
