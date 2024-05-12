import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DollarToHufPipe } from '../../../shared/pipes/dollar-to-huf/dollar-to-huf.pipe';
import { CommonModule } from '@angular/common';
import { Processor } from '../../../shared/models/Processor';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-processor-card',
  standalone: true,
  imports: [MatCardModule, ClipboardModule, CommonModule, DollarToHufPipe, MatButtonModule],
  templateUrl: './processor-card.component.html',
  styleUrl: './processor-card.component.sass'
})
export class ProcessorCardComponent {
@Input() processor?: Processor;
}
