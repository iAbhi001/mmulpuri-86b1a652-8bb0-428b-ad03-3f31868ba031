import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/task-list.component').then(m => m.TaskListComponent),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];