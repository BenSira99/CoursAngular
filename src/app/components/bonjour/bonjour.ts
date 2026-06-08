import { Component } from '@angular/core';
import { Personne } from '../../models/personne.model';

@Component({
  selector: 'app-bonjour',
  standalone: false,
  templateUrl: './bonjour.html',
  styleUrl: './bonjour.css'
})
export class Bonjour {
  etudiant: Personne = new Personne(21, 'fatima', 'zare');
  tableauChiffres: number[] = [14, 10, 15, 20];

  direBonjour(): string {
    return 'Bonjour mes étudiants';
  }
}
