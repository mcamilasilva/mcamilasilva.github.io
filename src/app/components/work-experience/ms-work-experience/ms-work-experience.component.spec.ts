import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsWorkExperienceComponent } from './ms-work-experience.component';

describe('MsWorkExperienceComponent', () => {
  let component: MsWorkExperienceComponent;
  let fixture: ComponentFixture<MsWorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsWorkExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
