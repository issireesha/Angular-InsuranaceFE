import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsubmittedapplicationComponent } from './viewsubmittedapplication.component';

describe('ViewsubmittedapplicationComponent', () => {
  let component: ViewsubmittedapplicationComponent;
  let fixture: ComponentFixture<ViewsubmittedapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsubmittedapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsubmittedapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
