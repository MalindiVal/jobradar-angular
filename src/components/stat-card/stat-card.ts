import { Component, input } from '@angular/core';
import { Card } from '../card/card';

// React : props { label, value }. Angular : des input() (signaux en lecture seule).
@Component({
  selector: 'app-stat-card',
  imports: [Card],
  templateUrl: './stat-card.html',
})
export class StatCard {
  readonly label = input.required<string>();
  readonly value = input.required<number>();
}
