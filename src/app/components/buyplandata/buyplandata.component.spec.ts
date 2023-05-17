import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyplandataComponent } from './buyplandata.component';

describe('BuyplandataComponent', () => {
  let component: BuyplandataComponent;
  let fixture: ComponentFixture<BuyplandataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyplandataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyplandataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
