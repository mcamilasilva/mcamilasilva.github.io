import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsBtnPeriodComponent } from './ms-btn-period.component';

describe('MsBtnPeriodComponent', () => {
  let component: MsBtnPeriodComponent;
  let fixture: ComponentFixture<MsBtnPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsBtnPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsBtnPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
