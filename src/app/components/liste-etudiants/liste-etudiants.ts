import { Component, OnInit, inject } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../models/etudiant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-etudiants',
  standalone: false,
  template: `
    <div class="liste-container">
      <h2>Liste des Étudiants Sauvegardés</h2>
      
      <div class="table-responsive" *ngIf="etudiants.length > 0; else vide">
        <table class="etudiant-table">
          <thead>
            <tr>
              <th>Nom d'utilisateur</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let e of etudiants">
              <td>{{ e.nomUtilisateur }}</td>
              <td>{{ e.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ng-template #vide>
        <p class="message-vide">Aucun étudiant enregistré pour le moment.</p>
      </ng-template>

      <button (click)="retour()" class="btn-retour">Retour au Formulaire</button>
    </div>
  `,
  styles: [`
    .liste-container { padding: 2rem; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    h2 { color: #1e293b; margin-bottom: 1.5rem; }
    .etudiant-table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
    .etudiant-table th, .etudiant-table td { padding: 0.75rem; border: 1px solid #e2e8f0; text-align: left; }
    .etudiant-table th { background: #f8fafc; color: #475569; }
    .btn-retour { background: #3b82f6; color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; }
    .message-vide { color: #64748b; font-style: italic; margin-bottom: 1.5rem; }
  `]
})
export class ListeEtudiantsComponent implements OnInit {
  private etudiantService = inject(EtudiantService);
  private router = inject(Router);
  
  etudiants: Etudiant[] = [];

  ngOnInit(): void {
    this.etudiants = this.etudiantService.obtenirEtudiants();
  }

  retour(): void {
    this.router.navigate(['tp5']);
  }
}
