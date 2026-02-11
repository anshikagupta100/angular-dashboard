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

    // If logged in → allow route
    if (this.auth.isAuthenticated()) {
      return true;
    }

    // If not logged in → redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}
