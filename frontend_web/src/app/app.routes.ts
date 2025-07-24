import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./pages/tasks-list/tasks-list.component').then(m => m.TasksListComponent)
  },
  {
    path: 'task/new',
    loadComponent: () =>
      import('./pages/task-form/task-form.component').then(m => m.TaskFormComponent)
  },
  {
    path: 'task/:id',
    loadComponent: () =>
      import('./pages/task-form/task-form.component').then(m => m.TaskFormComponent)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
