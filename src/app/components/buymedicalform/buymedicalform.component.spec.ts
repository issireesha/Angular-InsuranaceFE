import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuymedicalformComponent } from './buymedicalform.component';

describe('BuymedicalformComponent', () => {
  let component: BuymedicalformComponent;
  let fixture: ComponentFixture<BuymedicalformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuymedicalformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuymedicalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
