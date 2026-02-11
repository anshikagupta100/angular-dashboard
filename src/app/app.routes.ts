import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { LayoutComponent } from './layout/layout/layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { UsersComponent } from './pages/users/users';
import { ReportsComponent } from './pages/reports/reports';
import { NotificationsComponent } from './pages/notifications/notifications';
import { SettingsComponent } from './pages/settings/settings';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [

  // Public route
  { path: 'login', component: LoginComponent },

  // Protected routes
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [

      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // Fallback route
  { path: '**', redirectTo: 'login' }
];
