import { Routes } from '@angular/router';
import { PortfolioLayoutComponent } from './layout/portfolio-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioLayoutComponent,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('./pages/resume/resume.component').then((m) => m.ResumeComponent),
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./pages/blog/blog.component').then((m) => m.BlogComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then((m) => m.ContactComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'about' },
];
