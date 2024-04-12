import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowBatteryWarningComponent } from './low-battery-warning.component';

describe('LowBatteryWarningComponent', () => {
  let component: LowBatteryWarningComponent;
  let fixture: ComponentFixture<LowBatteryWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowBatteryWarningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowBatteryWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
