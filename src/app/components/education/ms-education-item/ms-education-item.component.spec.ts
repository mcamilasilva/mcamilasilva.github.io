import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsEducationItemComponent } from './ms-education-item.component';

describe('MsEducationItemComponent', () => {
  let component: MsEducationItemComponent;
  let fixture: ComponentFixture<MsEducationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsEducationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsEducationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
