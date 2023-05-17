import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalformbuyComponent } from './dentalformbuy.component';

describe('DentalformbuyComponent', () => {
  let component: DentalformbuyComponent;
  let fixture: ComponentFixture<DentalformbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalformbuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalformbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
