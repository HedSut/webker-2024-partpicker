import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparerRoutingModule } from './comparer-routing.module';
import { ComparerComponent } from './comparer.component';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MemoryCardComponent } from '../part-cards/memory-card/memory-card.component';
import { MotherboardCardComponent } from '../part-cards/motherboard-card/motherboard-card.component';
import { ProcessorCardComponent } from '../part-cards/processor-card/processor-card.component';
import { VideocardCardComponent } from '../part-cards/videocard-card/videocard-card.component';
import { PowersupplyCardComponent } from '../part-cards/powersupply-card/powersupply-card.component';


@NgModule({
  declarations: [
    ComparerComponent,
    ConfigViewerComponent,
  ],
  imports: [
    CommonModule,
    ComparerRoutingModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MemoryCardComponent,
    MotherboardCardComponent,
    ProcessorCardComponent,
    VideocardCardComponent,
    PowersupplyCardComponent
  ]
})
export class ComparerModule { }
