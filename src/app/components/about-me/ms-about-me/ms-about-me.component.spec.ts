import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAboutMeComponent } from './ms-about-me.component';

describe('MsAboutMeComponent', () => {
  let component: MsAboutMeComponent;
  let fixture: ComponentFixture<MsAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
