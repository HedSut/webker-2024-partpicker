import { Component, Input } from '@angular/core';
import { Memory } from '../../../shared/models/Memory';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { DollarToHufPipe } from '../../../shared/pipes/dollar-to-huf/dollar-to-huf.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrl: './memory-card.component.sass',
  imports: [MatCardModule, ClipboardModule, CommonModule, DollarToHufPipe, MatButtonModule]
})
export class MemoryCardComponent {
  @Input() memory?: Memory;
}
