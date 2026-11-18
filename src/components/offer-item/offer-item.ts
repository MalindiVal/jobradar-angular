import { Component, input } from '@angular/core';
import type { Offer } from '../../lib/types';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.html',
})
export class OfferItem {
  readonly offer = input.required<Offer>();
}
