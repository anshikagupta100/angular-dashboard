import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logs.html',
  styleUrls: ['./logs.css']
})
export class LogsComponent {

  logs = [
    {
      message: 'User logged in successfully',
      time: '5 mins ago',
      level: 'info'
    },
    {
      message: 'Report generated',
      time: '20 mins ago',
      level: 'success'
    },
    {
      message: 'System error occurred',
      time: '1 hour ago',
      level: 'error'
    }
  ];
}