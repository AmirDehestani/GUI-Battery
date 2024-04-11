import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatteryStatusWindowComponent } from './battery-status-window/battery-status-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BatteryStatusWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'battery';
}
