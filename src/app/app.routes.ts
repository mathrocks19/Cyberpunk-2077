import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { NewsComponent } from './components/news/news.component';
import { MeioSiteComponent } from './components/meio-site/meio-site.component';
import { PersonagensComponent } from './components/personagens/personagens.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '', component: PaginaInicialComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'meio-site', component: MeioSiteComponent },
  { path: 'news', component: NewsComponent },
  { path: 'personagens', component: PersonagensComponent},
];
