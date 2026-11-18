import { afterNextRender, Component, computed, inject, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { OfferList } from '../../components/offer-list/offer-list';
import { Stats } from '../../components/stats/stats';
import { OfferService } from '../../lib/offer.service';
import type { Offer } from '../../lib/types';

// Équivalent de app/page.tsx (route "/"), déclarée dans app.routes.ts.
@Component({
  selector: 'app-home',
  imports: [Header, Stats, OfferList],
  templateUrl: './home.html',
})
export class Home {
  private readonly offerService = inject(OfferService);

  // useState(...)  →  signal(...)
  protected readonly offers = signal<Offer[]>([]);
  protected readonly query = signal('');
  protected readonly error = signal('');
  protected readonly loading = signal(true);

  // Variable recalculée à chaque rendu en React  →  computed() en Angular
  protected readonly filtered = computed(() => {
    const q = this.query().toLowerCase();
    return this.offers().filter((o) => `${o.title} ${o.company} ${o.location}`.toLowerCase().includes(q));
  });

  constructor() {
    // useEffect(() => load(), []) dans un composant "use client".
    // afterNextRender ne s'exécute que dans le navigateur, jamais pendant le
    // pré-rendu SSR : le HTML pré-rendu affiche donc "Chargement...", comme en Next.
    afterNextRender(() => this.load());
  }

  async load() {
    this.loading.set(true);
    try {
      const data = await this.offerService.getOffers();
      // L'API ne garantit pas l'ordre : id décroissant = détectées le plus récemment en premier
      this.offers.set(data.sort((a, b) => b.id - a.id));
      this.error.set('');
    } catch {
      this.error.set("Impossible de joindre l'API. Vérifie que Docker Compose est démarré.");
    } finally {
      this.loading.set(false);
    }
  }

  async collect() {
    try {
      await this.offerService.runCollection();
      await this.load();
    } catch {
      this.error.set("La collecte n'a pas pu être déclenchée.");
    }
  }
}
