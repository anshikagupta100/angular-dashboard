import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';
import { AuthService } from '../auth/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  showProfileMenu = false;
  showSearch = false;
  searchText = '';

  constructor(
    public themeService: ThemeService,
    private auth: AuthService,
    private router: Router
  ) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  performSearch() {
    const query = this.searchText.toLowerCase().trim();

    if (!query) return;

    const routesMap: any = {
      dashboard: '/dashboard',
      analytics: '/analytics',
      users: '/users',
      reports: '/reports',
      notifications: '/notifications',
      logs: '/logs',
      settings: '/settings',
      help: '/help'
    };

    if (routesMap[query]) {
      this.router.navigate([routesMap[query]]);
      this.searchText = '';
      this.showSearch = false;
    } else {
      alert('Page not found');
    }
  }

  goToSettings() {
    this.router.navigate(['/settings']);
    this.showProfileMenu = false;
  }

  logout() {
    this.auth.logout();
    this.showProfileMenu = false;
  }
}