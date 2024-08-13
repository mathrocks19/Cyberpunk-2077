import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MeioSiteComponent } from './components/meio-site/meio-site.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { FooterComponent } from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, NewsComponent, MeioSiteComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cyberpunk';

  ngOnInit(): void {
    initFlowbite();
  }


}
