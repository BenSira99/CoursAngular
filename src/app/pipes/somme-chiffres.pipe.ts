import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe pour calculer la somme des chiffres d'un nombre.
 * @author BenSira99
 */
@Pipe({
  name: 'sommeChiffres',
  standalone: false
})
export class SommeChiffresPipe implements PipeTransform {
  transform(valeur: number | string | null): number {
    if (valeur === null || valeur === undefined) return 0;
    
    const chaine = valeur.toString();
    let somme = 0;
    
    for (const caractere of chaine) {
      const chiffre = parseInt(caractere, 10);
      if (!isNaN(chiffre)) {
        somme += chiffre;
      }
    }
    
    return somme;
  }
}
