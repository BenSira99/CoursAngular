/**
 * Fichier: src/app/models/etudiant.model.ts
 * Description: Modèle simplifié pour le TP Formulaire
 */
export interface Etudiant {
  nomUtilisateur: string;
  prenom?: string;
  dateNaissance?: string;
  email: string;
  telephone?: string;
  motDePasse?: string;
}
