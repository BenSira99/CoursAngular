import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Home } from './home/home';
import { Calculatrice } from './calculatrice/calculatrice';
import { Jeu } from './components/jeu/jeu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Calculatrice, Jeu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly title = signal('tp-angular');
}
