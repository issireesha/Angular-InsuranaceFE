import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadmindataComponent } from './addadmindata.component';

describe('AddadmindataComponent', () => {
  let component: AddadmindataComponent;
  let fixture: ComponentFixture<AddadmindataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadmindataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadmindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
