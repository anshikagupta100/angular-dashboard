import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class NotificationsComponent {

  notifications = [
    {
      message: 'New order received from client',
      time: '2 mins ago',
      type: 'success'
    },
    {
      message: 'System update available',
      time: '10 mins ago',
      type: 'info'
    },
    {
      message: 'Payment failed for Order #2451',
      time: '30 mins ago',
      type: 'error'
    }
  ];
}