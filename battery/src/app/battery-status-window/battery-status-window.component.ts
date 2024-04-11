import { Component } from '@angular/core';
import { BatteryInfoComponent } from '../battery-info/battery-info.component';

@Component({
  selector: 'app-battery-status-window',
  standalone: true,
  imports: [BatteryInfoComponent],
  templateUrl: './battery-status-window.component.html',
  styleUrl: './battery-status-window.component.css',
})
export class BatteryStatusWindowComponent {
  leftBatteryVoltage : number = 15.2
  rightBatteryVoltage : number = 14.5
}
