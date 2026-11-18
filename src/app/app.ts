import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Composant racine = équivalent de app/layout.tsx.
// Le <html lang="fr"> et le <title> sont dans src/index.html.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {}
