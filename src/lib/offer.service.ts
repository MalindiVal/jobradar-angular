import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';
import type { Offer } from './types';

// En Next.js les appels fetch() étaient directement dans page.tsx.
// En Angular on les sort dans un service injectable (singleton partagé).
@Injectable({ providedIn: 'root' })
export class OfferService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.apiUrl;

  // HttpClient renvoie un Observable ; firstValueFrom le convertit en Promise
  // pour garder le même style async/await que la version React.
  // Une réponse HTTP non-2xx lève une erreur automatiquement (pas besoin de tester response.ok).
  async getOffers(): Promise<Offer[]> {
    const data: unknown = await firstValueFrom(this.http.get(`${this.api}/api/offers`));
    if (!Array.isArray(data)) throw new Error('Réponse inattendue');
    return data as Offer[];
  }

  async runCollection(): Promise<void> {
    await firstValueFrom(this.http.post(`${this.api}/api/collection/run`, null));
  }
}
