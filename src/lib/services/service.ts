import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class Service {
  private readonly http = inject(HttpClient);
  private readonly api = environment.apiUrl;

  async get(query : string){
    const data: unknown = await firstValueFrom(this.http.get(`${this.api}`+query));
    if (!Array.isArray(data)) throw new Error('Réponse inattendue');
    return data;
  }

  async post(query : string, data? : []): Promise<void>{
    await firstValueFrom(this.http.post(`${this.api}`+query, data));
  }

  async put(query : string, data? : []): Promise<void>{
    await firstValueFrom(this.http.put(`${this.api}`+query, data));
  }

  async delete(query : string): Promise<void>{
    await firstValueFrom(this.http.delete(`${this.api}`+query));
  }
}
