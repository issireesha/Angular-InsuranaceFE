import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpendingdataComponent } from './userpendingdata.component';

describe('UserpendingdataComponent', () => {
  let component: UserpendingdataComponent;
  let fixture: ComponentFixture<UserpendingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpendingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpendingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
