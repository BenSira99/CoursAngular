import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { ReactiveFormsModule } from '@angular/forms';

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
    EtudiantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
