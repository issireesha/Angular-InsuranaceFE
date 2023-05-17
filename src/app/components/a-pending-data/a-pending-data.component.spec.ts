import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APendingDataComponent } from './a-pending-data.component';

describe('APendingDataComponent', () => {
  let component: APendingDataComponent;
  let fixture: ComponentFixture<APendingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APendingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APendingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
