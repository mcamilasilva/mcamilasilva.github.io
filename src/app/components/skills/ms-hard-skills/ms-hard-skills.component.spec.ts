import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsHardSkillsComponent } from './ms-hard-skills.component';

describe('MsHardSkillsComponent', () => {
  let component: MsHardSkillsComponent;
  let fixture: ComponentFixture<MsHardSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsHardSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsHardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
