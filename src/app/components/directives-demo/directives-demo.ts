import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: false,
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css'
})
export class DirectivesDemo {
  // @for
  protected tableauChiffres: number[] = [14, 10, 15, 20, 18];
  
  protected niveauActuel: string = 'débutant';
  
  protected niveauProgression: number = 45;

  definirNiveau(niveau: string): void {
    this.niveauActuel = niveau;
  }

  mettreAJourProgression(evenement: Event): void {
    const divSaisie = evenement.target as HTMLInputElement;
    this.niveauProgression = parseInt(divSaisie.value, 10);
  }
}
