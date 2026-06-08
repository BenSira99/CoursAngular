import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Personne } from '../../models/personne.model';

@Component({
  selector: 'app-interpolation-demo',
  standalone: false,
  templateUrl: './interpolation-demo.html',
  styleUrl: './interpolation-demo.css'
})
export class InterpolationDemo {
  etudiant: Personne = new Personne(21, 'fatima', 'zare');
  tableauChiffres: number[] = [14, 10, 15, 20];

  direBonjour(): string {
    return 'Bonjour mes étudiants';
  }
}
