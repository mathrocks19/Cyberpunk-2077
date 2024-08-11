import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MeioSiteComponent } from "../meio-site/meio-site.component";
import { NewsComponent } from "../news/news.component";
import { PersonagensComponent } from "../personagens/personagens.component";

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [NavbarComponent, MeioSiteComponent, NewsComponent, PersonagensComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {

}
