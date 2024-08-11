import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MeioSiteComponent } from './components/meio-site/meio-site.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { FooterComponent } from "./components/footer/footer.component";
import { DefaultfooterComponent } from "./defaultfooter/defaultfooter.component";
import { DefaulfooterComponent } from "./components/defaulfooter/defaulfooter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, DefaultfooterComponent, DefaulfooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cyberpunk';

  ngOnInit(): void {
    initFlowbite();
  }
}
