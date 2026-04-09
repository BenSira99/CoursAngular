import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  filiere: string;
}

@Component({
  selector: 'app-etudiants',
  standalone: false,
  templateUrl: './etudiants.html',
  styleUrl: './etudiants.css'
})
export class EtudiantsComponent {
  etudiantsForm: FormGroup;
  etudiants: Etudiant[] = [];
  prochainIde = 1;

  constructor(private fb: FormBuilder) {
    this.etudiantsForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required]],
      filiere: ['Informatique', [Validators.required]]
    });
  }

  ajouterEtudiant() {
    if (this.etudiantsForm.valid) {
      const formValue = this.etudiantsForm.value;
      const nouvelEtudiant: Etudiant = {
        id: this.prochainIde++,
        nom: formValue.nom,
        prenom: formValue.prenom,
        filiere: formValue.filiere
      };
      
      this.etudiants.push(nouvelEtudiant);
      this.etudiantsForm.reset({ filiere: 'Informatique' });
    }
  }

  supprimerEtudiant(id: number) {
    this.etudiants = this.etudiants.filter(e => e.id !== id);
  }
}
