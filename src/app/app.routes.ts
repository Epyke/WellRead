import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'books/:id',
    loadComponent: () => import('./book-details/book-details.page').then( m => m.BookDetailsPage)
  },
];
