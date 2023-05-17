import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsdataComponent } from './settingsdata.component';

describe('SettingsdataComponent', () => {
  let component: SettingsdataComponent;
  let fixture: ComponentFixture<SettingsdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
