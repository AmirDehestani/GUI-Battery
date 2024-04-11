import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryStatusWindowComponent } from './battery-status-window.component';

describe('BatteryStatusWindowComponent', () => {
  let component: BatteryStatusWindowComponent;
  let fixture: ComponentFixture<BatteryStatusWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatteryStatusWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatteryStatusWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
