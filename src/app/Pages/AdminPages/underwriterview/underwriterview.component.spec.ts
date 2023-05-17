import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterviewComponent } from './underwriterview.component';

describe('UnderwriterviewComponent', () => {
  let component: UnderwriterviewComponent;
  let fixture: ComponentFixture<UnderwriterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderwriterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwriterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
