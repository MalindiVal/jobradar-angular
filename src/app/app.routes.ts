import { Routes } from '@angular/router';
import { Home } from './home/home';

// Next.js : routage par fichiers (app/page.tsx = "/").
// Angular : routes déclarées explicitement.
export const routes: Routes = [{ path: '', component: Home }];
