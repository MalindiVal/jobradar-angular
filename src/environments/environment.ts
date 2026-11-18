// Équivalent de NEXT_PUBLIC_API_URL : valeur intégrée au moment du build.
// Pour une valeur différente en prod, créer environment.prod.ts et ajouter
// un "fileReplacements" dans la configuration "production" d'angular.json.
export const environment = {
  apiUrl: 'http://localhost:8000',
};
