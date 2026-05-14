import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Composants
import { Bonjour } from './components/bonjour/bonjour';
import { Calculatrice } from './components/calculatrice/calculatrice';
import { InterpolationDemo } from './components/interpolation-demo/interpolation-demo';
import { DirectivesDemo } from './components/directives-demo/directives-demo';
import { Jeu } from './components/jeu/jeu';
import { PipesDemo } from './components/pipes-demo/pipes-demo';

// Pipes
import { CompterCaracterePipe } from './pipes/compter-caractere.pipe';
import { InverserChainePipe } from './pipes/inverser-chaine.pipe';
import { SommeChiffresPipe } from './pipes/somme-chiffres.pipe';
import { EtudiantsComponent } from './components/etudiants/etudiants';
import { ListeEtudiantsComponent } from './components/liste-etudiants/liste-etudiants';
import { FormulaireReactifComponent } from './components/formulaire-reactif/formulaire-reactif';
import { ReactiveFormsModule } from '@angular/forms';
import { MeteoComponent } from './meteo/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    Bonjour,
    Calculatrice,
    InterpolationDemo,
    DirectivesDemo,
    Jeu,
    PipesDemo,
    CompterCaracterePipe,
    InverserChainePipe,
    SommeChiffresPipe,
    EtudiantsComponent,
    ListeEtudiantsComponent,
    FormulaireReactifComponent,
    MeteoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
