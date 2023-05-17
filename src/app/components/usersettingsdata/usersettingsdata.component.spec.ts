import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersettingsdataComponent } from './usersettingsdata.component';

describe('UsersettingsdataComponent', () => {
  let component: UsersettingsdataComponent;
  let fixture: ComponentFixture<UsersettingsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersettingsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersettingsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
