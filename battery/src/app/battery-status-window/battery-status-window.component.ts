import { Component, OnInit } from '@angular/core';
import { BatteryInfoComponent } from '../battery-info/battery-info.component';
import { RosService } from '../ros.service';

@Component({
  selector: 'app-battery-status-window',
  standalone: true,
  imports: [BatteryInfoComponent],
  templateUrl: './battery-status-window.component.html',
  styleUrl: './battery-status-window.component.css',
})
export class BatteryStatusWindowComponent implements OnInit {
  leftBatteryVoltage: number;
  rightBatteryVoltage: number;

  constructor(private rosService: RosService) {
    this.leftBatteryVoltage = 0; // Initial value
    this.rightBatteryVoltage = 0; // Initial value
  }

  ngOnInit(): void {
    // Subscribe to the left battery voltage topic
    this.rosService.subscribeToLeftBatteryVoltage((data: number) => {
      this.leftBatteryVoltage = data;
    });

    // Subscribe to the right battery voltage topic
    this.rosService.subscribeToRightBatteryVoltage((data: number) => {
      this.rightBatteryVoltage = data;
    });
  }
}