import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {

    // Check if user is logged in
    if (this.auth.isAuthenticated()) {
      return true;
    }

    // If not logged in, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}