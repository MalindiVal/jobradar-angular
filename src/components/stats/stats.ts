import { Component, computed, input } from '@angular/core';
import type { Offer } from '../../lib/types/offer';
import { StatCard } from '../stat-card/stat-card';

// React recalcule les filter() à chaque rendu.
// Angular : computed() ne recalcule que quand offers() change (mémoïsé).
@Component({
  selector: 'app-stats',
  imports: [StatCard],
  templateUrl: './stats.html',
})
export class Stats {
  readonly offers = input.required<Offer[]>();

  protected readonly newCount = computed(() => this.offers().filter((o) => o.status === 'NEW').length);
  protected readonly relevantCount = computed(() => this.offers().filter((o) => o.match_score >= 80).length);
}
