import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsBtnLinkedinComponent } from './ms-btn-linkedin.component';

describe('MsBtnLinkedinComponent', () => {
  let component: MsBtnLinkedinComponent;
  let fixture: ComponentFixture<MsBtnLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsBtnLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsBtnLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
