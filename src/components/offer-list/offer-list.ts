import { Component, input, model } from '@angular/core';
import type { Offer } from '../../lib/types';
import { Card } from '../card/card';
import { OfferItem } from '../offer-item/offer-item';

// React : deux props `query` + `onQueryChange` pour un champ contrôlé.
// Angular : un seul model() = input + output combinés, utilisable en
// liaison bidirectionnelle par le parent : [(query)]="query".
@Component({
  selector: 'app-offer-list',
  imports: [Card, OfferItem],
  templateUrl: './offer-list.html',
})
export class OfferList {
  readonly offers = input.required<Offer[]>();
  readonly query = model('');
  readonly error = input('');
  readonly loading = input(false);

  protected onInput(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
