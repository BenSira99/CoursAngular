import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompterCaracterePipe } from '../../pipes/compter-caractere.pipe';
import { InverserChainePipe } from '../../pipes/inverser-chaine.pipe';
import { SommeChiffresPipe } from '../../pipes/somme-chiffres.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: false,
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
export class PipesDemo {
  // Variables en français selon les règles
  protected textePourCompter: string = 'banane';
  protected caractereRecherche: string = 'a';
  
  protected texteAInverser: string = 'Bonjour';
  
  protected nombreASommer: number | null = 4576;
}
