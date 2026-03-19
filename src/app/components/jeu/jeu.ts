import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jeu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jeu.html',
  styleUrl: './jeu.css',
})
export class Jeu {
  // Logique métier en français selon les règles Ben Sira
  protected readonly nombreSecret = signal<number>(Math.floor(Math.random() * 100) + 1);
  protected readonly nombreSaisi = signal<number | null>(null);
  protected readonly message = signal<string>('');
  protected readonly essaisRestants = signal<number>(5);
  protected readonly jeuTermine = signal<boolean>(false);
  protected readonly estGagne = signal<boolean>(false);

  /**
   * Vérifie le nombre saisi par l'utilisateur et met à jour l'état du jeu.
   */
  verifierNombre(): void {
    const saisi = this.nombreSaisi();
    const secret = this.nombreSecret();

    if (saisi === null || saisi === undefined) {
      this.message.set('⚠️ Veuillez saisir un nombre valide entre 1 et 100.');
      return;
    }

    if (saisi === secret) {
      this.message.set('Bravo vous avez gagnez!!!! 🎉');
      this.jeuTermine.set(true);
      this.estGagne.set(true);
    } else {
      this.essaisRestants.update((e: number) => e - 1);
      
      if (saisi > secret) {
        this.message.set('Le nombre saisi est supérieur au nombre secret!!! 🔼');
      } else {
        this.message.set('Le nombre saisi est inférieur au nombre secret!!! 🔽');
      }

      if (this.essaisRestants() <= 0) {
        this.message.set(`Dommage ! 😢 Le nombre secret était ${secret}.`);
        this.jeuTermine.set(true);
        this.estGagne.set(false);
      }
    }
    
    // Réinitialisation du champ de saisie après chaque tentative
    this.nombreSaisi.set(null);
  }

  /**
   * Réinitialise les paramètres du jeu pour une nouvelle partie.
   */
  nouvellePartie(): void {
    this.nombreSecret.set(Math.floor(Math.random() * 100) + 1);
    this.nombreSaisi.set(null);
    this.message.set('');
    this.essaisRestants.set(5);
    this.jeuTermine.set(false);
    this.estGagne.set(false);
  }
}
