import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Composants
import { Bonjour } from './components/bonjour/bonjour';
import { Calculatrice } from './components/calculatrice/calculatrice';
import { InterpolationDemo } from './components/interpolation-demo/interpolation-demo';
import { DirectivesDemo } from './components/directives-demo/directives-demo';
import { Jeu } from './components/jeu/jeu';
import { PipesDemo } from './components/pipes-demo/pipes-demo';
import { EtudiantsComponent } from './components/etudiants/etudiants';
import { ListeEtudiantsComponent } from './components/liste-etudiants/liste-etudiants';
import { FormulaireReactifComponent } from './components/formulaire-reactif/formulaire-reactif';
import { GestionDesEtudiantsComponent } from './components/gestion-des-etudiants/gestion-des-etudiants';
import { MeteoComponent } from './meteo/meteo.component';

const routes: Routes = [
  { path: '', redirectTo: 'tp1', pathMatch: 'full' },
  { path: 'tp1', component: Bonjour },
  { path: 'tp2', component: Calculatrice },
  { path: 'interpolation', component: InterpolationDemo },
  { path: 'directives', component: DirectivesDemo },
  { path: 'tp3', component: Jeu },
  { path: 'tp4', component: PipesDemo },
  { path: 'tp5', component: EtudiantsComponent },
  { path: 'gestion-etudiants', component: GestionDesEtudiantsComponent },
  { path: 'tp6', component: FormulaireReactifComponent },
  { path: 'liste-etudiants', component: ListeEtudiantsComponent },
  { path: 'meteo', component: MeteoComponent },
  { path: 'jeu', redirectTo: 'tp3' }, // Alias pratique
  { path: 'pipes', redirectTo: 'tp4' }, // Alias pratique
  { path: '**', redirectTo: 'tp1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
