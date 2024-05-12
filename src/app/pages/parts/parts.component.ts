import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.sass',
})
export class PartsComponent {
  catalog: [string, number] = [environment.videocardCollection, 0];

  constructor() {}

  setCatalog(catalog: [string, number]) {
    this.catalog = catalog;
  }
}
