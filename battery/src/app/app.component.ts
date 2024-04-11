import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatteryInfoComponent } from './battery-info/battery-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BatteryInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'battery';
}
