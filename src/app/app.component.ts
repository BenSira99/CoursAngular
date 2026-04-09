import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private router = inject(Router);
  protected readonly titre = 'Formation Angular BenSira';

  /**
   * Méthode de navigation programmatique demandée
   */
  naviguer(chemin: string) {
    this.router.navigate([chemin]);
  }
}
