import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Motherboard } from '../../../shared/models/Motherboard';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DollarToHufPipe } from '../../../shared/pipes/dollar-to-huf/dollar-to-huf.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-motherboard-card',
  templateUrl: './motherboard-card.component.html',
  styleUrl: './motherboard-card.component.sass',
  imports: [MatCardModule, ClipboardModule, CommonModule, DollarToHufPipe, MatButtonModule]
})
export class MotherboardCardComponent {
  @Input() motherboard?: Motherboard;
}
