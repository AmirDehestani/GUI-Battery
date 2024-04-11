import { Component } from '@angular/core';

@Component({
  selector: 'app-battery-info',
  standalone: true,
  imports: [],
  templateUrl: './battery-info.component.html',
  styleUrl: './battery-info.component.css'
})
export class BatteryInfoComponent {
  side : string = 'L'
  voltage : number = 15.2

  voltageColor() : string {
    if (this.voltage > 14.0) {
      return "green"
    } else if (this.voltage > 13.5) {
      return "yellow"
    } else {
      return "red"
    }
  }
}
