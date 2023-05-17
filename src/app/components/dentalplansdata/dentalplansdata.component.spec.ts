import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalplansdataComponent } from './dentalplansdata.component';

describe('DentalplansdataComponent', () => {
  let component: DentalplansdataComponent;
  let fixture: ComponentFixture<DentalplansdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalplansdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalplansdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
