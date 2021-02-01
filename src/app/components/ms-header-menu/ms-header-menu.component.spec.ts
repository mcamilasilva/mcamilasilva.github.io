import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsHeaderMenuComponent } from './ms-header-menu.component';

describe('MsHeaderNavbarComponent', () => {
  let component: MsHeaderMenuComponent;
  let fixture: ComponentFixture<MsHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsHeaderMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
