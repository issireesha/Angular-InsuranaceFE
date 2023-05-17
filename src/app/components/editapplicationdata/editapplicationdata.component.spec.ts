import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditapplicationdataComponent } from './editapplicationdata.component';

describe('EditapplicationdataComponent', () => {
  let component: EditapplicationdataComponent;
  let fixture: ComponentFixture<EditapplicationdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditapplicationdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditapplicationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
