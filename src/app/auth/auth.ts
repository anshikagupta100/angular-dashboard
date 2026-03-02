import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role: string | null = null;

  constructor(private router: Router) {
    this.role = localStorage.getItem('role');
  }

  login(username: string, password: string): boolean {

    
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'admin');
      this.role = 'admin';
      return true;
    }

    if (username === 'user' && password === 'user123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('role', 'user');
      this.role = 'user';
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.clear();
    this.role = null;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getRole(): string | null {
    return this.role;
  }
}