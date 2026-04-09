import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculatrice',
  standalone: false,
  templateUrl: './calculatrice.html',
  styleUrl: './calculatrice.css'
})
export class Calculatrice {
  // Signal pour l'affichage de l'écran
  ecran: string = '0';
  
  private operandePrecedente: string = '';
  private operateur: string | null = null;
  private nouveauCalcul: boolean = true;

  ajouterChiffre(chiffre: string) {
    if (this.nouveauCalcul) {
      this.ecran = chiffre;
      this.nouveauCalcul = false;
    } else {
      if (this.ecran === '0') {
        this.ecran = chiffre;
      } else {
        this.ecran = this.ecran + chiffre;
      }
    }
  }

  choisirOperateur(op: string) {
    if (this.operateur !== null) {
      this.calculer();
    }
    this.operandePrecedente = this.ecran;
    this.operateur = op;
    this.nouveauCalcul = true;
  }

  effacer() {
    this.ecran = '0';
    this.operandePrecedente = '';
    this.operateur = null;
    this.nouveauCalcul = true;
  }

  calculer() {
    if (this.operateur === null || this.nouveauCalcul) return;

    const current = parseFloat(this.ecran);
    const prev = parseFloat(this.operandePrecedente);
    let resultat: number = 0;

    switch (this.operateur) {
      case '+': resultat = prev + current; break;
      case '-': resultat = prev - current; break;
      case '*': resultat = prev * current; break;
      case '/': 
        if (current === 0) {
          alert("Division par zéro impossible !");
          this.effacer();
          return;
        }
        resultat = prev / current; 
        break;
    }

    this.ecran = resultat.toString();
    this.operateur = null;
    this.nouveauCalcul = true;
  }
}
