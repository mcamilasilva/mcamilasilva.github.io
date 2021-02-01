import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsLanguageLevelComponent } from './ms-language-level.component';

describe('MsLanguageLevelComponent', () => {
  let component: MsLanguageLevelComponent;
  let fixture: ComponentFixture<MsLanguageLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsLanguageLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsLanguageLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
