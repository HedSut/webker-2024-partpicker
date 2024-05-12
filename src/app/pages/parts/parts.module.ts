import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsRoutingModule } from './parts-routing.module';
import { PartsComponent } from './parts.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectorComponent } from './selector/selector.component';
import { ViewerComponent } from './viewer/viewer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DollarToHufPipe } from '../../shared/pipes/dollar-to-huf/dollar-to-huf.pipe';
import { MemoryCardComponent } from '../part-cards/memory-card/memory-card.component';
import { MotherboardCardComponent } from '../part-cards/motherboard-card/motherboard-card.component';
import { ProcessorCardComponent } from '../part-cards/processor-card/processor-card.component';
import { PowersupplyCardComponent } from '../part-cards/powersupply-card/powersupply-card.component';
import { VideocardCardComponent } from '../part-cards/videocard-card/videocard-card.component';


@NgModule({
  declarations: [
    PartsComponent,
    SelectorComponent,
    ViewerComponent,
  ],
  imports: [
    CommonModule,
    PartsRoutingModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    ClipboardModule,
    MemoryCardComponent,
    MotherboardCardComponent,
    ProcessorCardComponent,
    PowersupplyCardComponent,
    VideocardCardComponent
  ]
})
export class PartsModule { }
