import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboarddataComponent } from './userdashboarddata.component';

describe('UserdashboarddataComponent', () => {
  let component: UserdashboarddataComponent;
  let fixture: ComponentFixture<UserdashboarddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdashboarddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboarddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
