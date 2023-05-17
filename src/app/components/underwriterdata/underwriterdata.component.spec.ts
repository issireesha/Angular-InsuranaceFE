import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwriterdataComponent } from './underwriterdata.component';

describe('UnderwriterdataComponent', () => {
  let component: UnderwriterdataComponent;
  let fixture: ComponentFixture<UnderwriterdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderwriterdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwriterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
