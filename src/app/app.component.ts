import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { MeioSiteComponent } from "./components/meio-site/meio-site.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NewsComponent } from "./components/news/news.component";
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, // Adicione o RouterModule aos imports
    HomeComponent,
    MeioSiteComponent,
    NavbarComponent,
    NewsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cyberpunk';

  ngOnInit(): void {
    initFlowbite();
  }
}
