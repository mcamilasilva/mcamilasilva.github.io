import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsSoftSkillsComponent } from './ms-soft-skills.component';

describe('MsSoftSkillsComponent', () => {
  let component: MsSoftSkillsComponent;
  let fixture: ComponentFixture<MsSoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsSoftSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsSoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
