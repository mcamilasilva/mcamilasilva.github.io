import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsHeaderBodyComponent } from './ms-header-body.component';

describe('MsHeaderBodyComponent', () => {
  let component: MsHeaderBodyComponent;
  let fixture: ComponentFixture<MsHeaderBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsHeaderBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsHeaderBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
