import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../models/etudiant.model';

@Component({
  selector: 'app-gestion-des-etudiants',
  standalone: false,
  templateUrl: './gestion-des-etudiants.html',
  styleUrl: './gestion-des-etudiants.css'
})
export class GestionDesEtudiantsComponent {
  private router = inject(Router);
  private etudiantService = inject(EtudiantService);

  etudiant: Etudiant = {
    nomUtilisateur: '',
    prenom: '',
    dateNaissance: '',
    email: '',
    telephone: '',
    motDePasse: ''
  };

  sauvegarder(form: any) {
    if (form.valid) {
      this.etudiantService.ajouterEtudiant({ ...this.etudiant });
      alert('Étudiant enregistré avec succès !');
      this.annuler(form);
    } else {
      alert('Merci de compléter correctement tous les champs obligatoires.');
    }
  }

  annuler(form: any) {
    this.etudiant = {
      nomUtilisateur: '',
      prenom: '',
      dateNaissance: '',
      email: '',
      telephone: '',
      motDePasse: ''
    };
    form.resetForm();
  }

  lister() {
    this.router.navigate(['liste-etudiants'], { queryParams: { retour: 'gestion-etudiants' } });
  }
}
