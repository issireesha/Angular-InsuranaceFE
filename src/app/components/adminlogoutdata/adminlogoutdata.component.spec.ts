import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogoutdataComponent } from './adminlogoutdata.component';

describe('AdminlogoutdataComponent', () => {
  let component: AdminlogoutdataComponent;
  let fixture: ComponentFixture<AdminlogoutdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlogoutdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlogoutdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
