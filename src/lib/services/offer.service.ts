import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import type { Offer } from '../types/offer';
import { Service } from './service';

// En Next.js les appels fetch() étaient directement dans page.tsx.
// En Angular on les sort dans un service injectable (singleton partagé).
@Injectable({ providedIn: 'root' })
export class OfferService {
  private readonly service = inject(Service);

  // HttpClient renvoie un Observable ; firstValueFrom le convertit en Promise
  // pour garder le même style async/await que la version React.
  // Une réponse HTTP non-2xx lève une erreur automatiquement (pas besoin de tester response.ok).
  async getOffers(): Offer[] {
    const data: unknown = await this.service.get(`/api/offers`);
    
    return data as Offer[];
  }

  async runCollection(): Promise<void> {
    await this.service.post(`/api/collection/run`, null);
  }
}
