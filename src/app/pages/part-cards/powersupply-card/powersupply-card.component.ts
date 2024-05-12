import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DollarToHufPipe } from '../../../shared/pipes/dollar-to-huf/dollar-to-huf.pipe';
import { Powersupply } from '../../../shared/models/Powersupply';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-powersupply-card',
  standalone: true,
  imports: [MatCardModule, ClipboardModule, CommonModule, DollarToHufPipe, MatButtonModule],
  templateUrl: './powersupply-card.component.html',
  styleUrl: './powersupply-card.component.sass'
})
export class PowersupplyCardComponent {
@Input() powersupply?: Powersupply;
}
