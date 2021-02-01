import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsSystemLanguageModalComponent } from './ms-system-language-modal.component';

describe('MsSystemLanguageModalComponent', () => {
  let component: MsSystemLanguageModalComponent;
  let fixture: ComponentFixture<MsSystemLanguageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsSystemLanguageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsSystemLanguageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
