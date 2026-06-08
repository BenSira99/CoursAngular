import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../../services/etudiant.service';
import { Etudiant } from '../../models/etudiant.model';

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
              <th>Nom</th>
              <th>Prénom</th>
              <th>Date de naissance</th>
              <th>Email</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let e of etudiants">
              <td>{{ e.nomUtilisateur }}</td>
              <td>{{ e.prenom || '-' }}</td>
              <td>{{ e.dateNaissance || '-' }}</td>
              <td>{{ e.email }}</td>
              <td>{{ e.telephone || '-' }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ng-template #vide>
        <p class="message-vide">Aucun étudiant enregistré pour le moment.</p>
      </ng-template>

      <button (click)="retour()" class="btn-retour">Retour</button>
    </div>
  `,
  styles: [`
    .liste-container { padding: 2rem; background: var(--sb-card); border-radius: 12px; box-shadow: var(--sb-shadow); border: 1px solid var(--sb-border); }
    h2 { color: var(--sb-green); margin-bottom: 1.5rem; }
    .etudiant-table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
    .etudiant-table th, .etudiant-table td { padding: 0.75rem; border: 1px solid var(--sb-border); text-align: left; color: var(--sb-text); }
    .etudiant-table th { background: var(--sb-bg); color: var(--sb-muted); text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; }
    .btn-retour { background: var(--sb-green); color: white; border: 1px solid var(--sb-green); padding: 0.6rem 1.2rem; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s; }
    .btn-retour:hover { background: var(--sb-green-hover); border-color: var(--sb-green-hover); }
    .message-vide { color: var(--sb-muted); font-style: italic; margin-bottom: 1.5rem; }
  `]
})
export class ListeEtudiantsComponent implements OnInit {
  private etudiantService = inject(EtudiantService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  etudiants: Etudiant[] = [];
  retourRoute = 'tp5';

  ngOnInit(): void {
    this.etudiants = this.etudiantService.obtenirEtudiants();
    const retourParam = this.route.snapshot.queryParamMap.get('retour');
    if (retourParam) {
      this.retourRoute = retourParam;
    }
  }

  retour(): void {
    this.router.navigate([this.retourRoute]);
  }
}
