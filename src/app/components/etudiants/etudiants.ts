import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../models/etudiant.model';

@Component({
  selector: 'app-etudiants',
  standalone: false,
  templateUrl: './etudiants.html',
  styleUrl: './etudiants.css'
})
export class EtudiantsComponent {
  private router = inject(Router);
  private etudiantService = inject(EtudiantService);

  // Objet lié au modèle
  utilisateur: Etudiant = {
    nomUtilisateur: '',
    email: '',
    motDePasse: ''
  };

  /**
   * Bouton SAUVEGARDER
   */
  sauvegarder() {
    this.etudiantService.ajouterEtudiant({ ...this.utilisateur });
    alert('Utilisateur enregistré dans le service !');
    this.annuler();
  }

  /**
   * Bouton ANNULER
   */
  annuler() {
    this.utilisateur = {
      nomUtilisateur: '',
      email: '',
      motDePasse: ''
    };
  }

  /**
   * Bouton LISTER
   */
  lister() {
    this.router.navigate(['liste-etudiants'], { queryParams: { retour: 'tp5' } });
  }
}
