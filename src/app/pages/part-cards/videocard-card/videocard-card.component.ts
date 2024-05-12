import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DollarToHufPipe } from '../../../shared/pipes/dollar-to-huf/dollar-to-huf.pipe';
import { Videocard } from '../../../shared/models/Videocard';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-videocard-card',
  standalone: true,
  imports: [MatCardModule, ClipboardModule, CommonModule, DollarToHufPipe, MatButtonModule],
  templateUrl: './videocard-card.component.html',
  styleUrl: './videocard-card.component.sass'
})
export class VideocardCardComponent {
@Input() videocard?: Videocard;
}
