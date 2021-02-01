import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsWorkExperienceItemComponent } from './ms-work-experience-item.component';

describe('MsWorkExperienceItemComponent', () => {
  let component: MsWorkExperienceItemComponent;
  let fixture: ComponentFixture<MsWorkExperienceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsWorkExperienceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsWorkExperienceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
