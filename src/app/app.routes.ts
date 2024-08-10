import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { NewsComponent } from './components/news/news.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: 'landing-page' },
];
