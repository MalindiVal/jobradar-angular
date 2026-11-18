import { Component, output } from '@angular/core';

// React : une prop callback `onCollect: () => void`.
// Angular : un output() que le parent écoute avec (collect)="...".
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  readonly collect = output<void>();
}
