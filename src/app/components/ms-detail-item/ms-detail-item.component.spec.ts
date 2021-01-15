import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsDetailItemComponent } from './ms-detail-item.component';

describe('MsDetailItemComponent', () => {
  let component: MsDetailItemComponent;
  let fixture: ComponentFixture<MsDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
