import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsEducationComponent } from './ms-education.component';

describe('MsEducationComponent', () => {
  let component: MsEducationComponent;
  let fixture: ComponentFixture<MsEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
