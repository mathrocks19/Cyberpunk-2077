import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { initFlowbite } from 'flowbite/lib/esm/components';
import { MeioSiteComponent } from "./meio-site/meio-site.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MeioSiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'cyberpunk';

  ngOnInit(): void {
    initFlowbite();
  }
}
