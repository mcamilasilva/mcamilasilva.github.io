import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAboutMeDetailItemComponent } from './ms-about-me-detail-item.component';

describe('MsAboutMeDetailItemComponent', () => {
  let component: MsAboutMeDetailItemComponent;
  let fixture: ComponentFixture<MsAboutMeDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsAboutMeDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAboutMeDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
