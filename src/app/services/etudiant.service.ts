import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private listeEtudiants: Etudiant[] = [];

  ajouterEtudiant(etudiant: Etudiant): void {
    this.listeEtudiants.push(etudiant);
  }

  obtenirEtudiants(): Etudiant[] {
    return this.listeEtudiants;
  }
}
