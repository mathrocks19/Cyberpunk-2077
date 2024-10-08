import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  constructor(private router: Router) {}

  navigateToPaginaInicial(): void {
    this.router.navigate(['/news']);
  }
}
