import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatteryStatusWindowComponent } from './battery-status-window/battery-status-window.component';
import { AutonomyStatusComponent } from './autonomy-status/autonomy-status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BatteryStatusWindowComponent, AutonomyStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'battery';
}
