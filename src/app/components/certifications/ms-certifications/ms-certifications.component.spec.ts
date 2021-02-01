import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsCertificationsComponent } from './ms-certifications.component';

describe('MsCertiticationsComponent', () => {
  let component: MsCertificationsComponent;
  let fixture: ComponentFixture<MsCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsCertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
