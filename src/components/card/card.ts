import { Component } from '@angular/core';

// React : <Card as="section">{children}</Card> choisit la balise via la prop `as`.
// Angular ne peut pas changer la balise d'un composant : on utilise un sélecteur
// d'attribut, et c'est le parent qui choisit la balise : <section appCard>…</section>.
// {children} devient <ng-content /> (projection de contenu).
@Component({
  selector: '[appCard]',
  host: { class: 'card' },
  template: '<ng-content />',
})
export class Card {}
