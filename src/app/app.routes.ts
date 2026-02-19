import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { LayoutComponent } from './layout/layout/layout';

import { DashboardComponent } from './pages/dashboard/dashboard';
import { AnalyticsComponent } from './pages/analytics/analytics';
import { UsersComponent } from './pages/users/users';
import { ReportsComponent } from './pages/reports/reports';
import { NotificationsComponent } from './pages/notifications/notifications';
import { LogsComponent } from './pages/logs/logs';
import { SettingsComponent } from './pages/settings/settings';
import { HelpComponent } from './pages/help/help';

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
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'logs', component: LogsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'help', component: HelpComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // Fallback
  { path: '**', redirectTo: 'login' }
];