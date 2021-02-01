import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsCertificationItemComponent } from './ms-certification-item.component';

describe('MsCertificationItemComponent', () => {
  let component: MsCertificationItemComponent;
  let fixture: ComponentFixture<MsCertificationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsCertificationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsCertificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
