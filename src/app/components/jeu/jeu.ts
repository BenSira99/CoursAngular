import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jeu',
  standalone: false,
  templateUrl: './jeu.html',
  styleUrl: './jeu.css',
})
export class Jeu {
  // Logique métier en français selon les règles 
  protected nombreSecret: number = Math.floor(Math.random() * 100) + 1;
  protected nombreSaisi: number | null = null;
  protected message: string = '';
  protected essaisRestants: number = 5;
  protected jeuTermine: boolean = false;
  protected estGagne: boolean = false;

  /**
   * Vérifie le nombre saisi par l'utilisateur et met à jour l'état du jeu.
   */
  verifierNombre(): void {
    if (this.nombreSaisi === null || this.nombreSaisi === undefined) {
      this.message = '⚠️ Veuillez saisir un nombre valide entre 1 et 100.';
      return;
    }

    if (this.jeuTermine) return;

    if (this.nombreSaisi === this.nombreSecret) {
      this.message = 'Bravo vous avez gagné ! 🎉';
      this.jeuTermine = true;
      this.estGagne = true;
    } else {
      this.essaisRestants--;
      
      if (this.nombreSaisi > this.nombreSecret) {
        this.message = 'Le nombre saisi est supérieur au nombre secret ! 🔼';
      } else {
        this.message = 'Le nombre saisi est inférieur au nombre secret ! 🔽';
      }

      if (this.essaisRestants <= 0) {
        this.message = `Dommage ! 😢 Le nombre secret était ${this.nombreSecret}.`;
        this.jeuTermine = true;
        this.estGagne = false;
      }
    }
    
    // On vide le champ pour la prochaine tentative si le jeu n'est pas fini
    if (!this.jeuTermine) {
      this.nombreSaisi = null;
    }
  }

  /**
   * Réinitialise les paramètres du jeu pour une nouvelle partie.
   */
  nouvellePartie(): void {
    this.nombreSecret = Math.floor(Math.random() * 100) + 1;
    this.nombreSaisi = null;
    this.message = '';
    this.essaisRestants = 5;
    this.jeuTermine = false;
    this.estGagne = false;
  }
}
