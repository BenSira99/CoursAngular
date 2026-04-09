import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe pour inverser une chaîne de caractères.
 * @author BenSira99
 */
@Pipe({
  name: 'inverserChaine',
  standalone: false
})
export class InverserChainePipe implements PipeTransform {
  transform(valeur: string): string {
    if (!valeur) return '';
    return valeur.split('').reverse().join('');
  }
}
