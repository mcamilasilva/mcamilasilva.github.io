import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsSkillsComponent } from './ms-skills.component';

describe('MsSkillsComponent', () => {
  let component: MsSkillsComponent;
  let fixture: ComponentFixture<MsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
