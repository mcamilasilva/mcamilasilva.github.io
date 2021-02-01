import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsHardSkillsItemComponent } from './ms-hard-skills-item.component';

describe('MsHardSkillsItemComponent', () => {
  let component: MsHardSkillsItemComponent;
  let fixture: ComponentFixture<MsHardSkillsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsHardSkillsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsHardSkillsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
