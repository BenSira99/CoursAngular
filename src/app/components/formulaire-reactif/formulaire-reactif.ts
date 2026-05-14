import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-formulaire-reactif',
  standalone: false,
  templateUrl: './formulaire-reactif.html',
  styleUrl: './formulaire-reactif.css'
})
export class FormulaireReactifComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private etudiantService = inject(EtudiantService);

  // FormGroup défini côté composant (Reactive Form)
  formulaire: FormGroup = this.fb.group({
    nomUtilisateur: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', [Validators.required, Validators.minLength(6)]]
  });

  /**
   * Bouton SAUVEGARDER
   */
  sauvegarder() {
    if (this.formulaire.valid) {
      this.etudiantService.ajouterEtudiant(this.formulaire.value);
      alert('Utilisateur enregistré (Reactive Form) !');
      this.formulaire.reset();
    }
  }

  /**
   * Bouton ANNULER
   */
  annuler() {
    this.formulaire.reset();
  }

  /**
   * Bouton LISTER : navigation programmatique
   */
  lister() {
    this.router.navigate(['liste-etudiants']);
  }
}
