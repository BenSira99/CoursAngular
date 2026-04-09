import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe pour compter les occurrences d'un caractère dans une chaîne.
 * @author BenSira99
 */
@Pipe({
  name: 'compterCaractere',
  standalone: false
})
export class CompterCaracterePipe implements PipeTransform {
  transform(valeur: string, caractere: string): number {
    if (!valeur || !caractere) return 0;
    return valeur.split(caractere).length - 1;
  }
}
