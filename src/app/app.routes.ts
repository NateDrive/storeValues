import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'day-view',
    pathMatch: 'full',
  },
  {
    path: 'day-view',
    loadComponent: () =>
      import('./day-view/day-view.page').then((m) => m.DayViewPage),
  },
  {
    path: 'month-view',
    loadComponent: () =>
      import('./month-view/month-view.page').then((m) => m.MonthViewPage),
  },
];
