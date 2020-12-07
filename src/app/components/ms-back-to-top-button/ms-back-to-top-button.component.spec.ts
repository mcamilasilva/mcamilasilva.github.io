import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsBackToTopButtonComponent } from './ms-back-to-top-button.component';

describe('MsBackToTopButtonComponent', () => {
  let component: MsBackToTopButtonComponent;
  let fixture: ComponentFixture<MsBackToTopButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsBackToTopButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsBackToTopButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
