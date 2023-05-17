import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyplanformComponent } from './buyplanform.component';

describe('BuyplanformComponent', () => {
  let component: BuyplanformComponent;
  let fixture: ComponentFixture<BuyplanformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyplanformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyplanformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
