import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickerRoutingModule } from './picker-routing.module';
import { PickerComponent } from './picker.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatInputModule } from '@angular/material/input';
import { MotherboardCardComponent } from '../part-cards/motherboard-card/motherboard-card.component';
import { MemoryCardComponent } from '../part-cards/memory-card/memory-card.component';
import { ProcessorCardComponent } from '../part-cards/processor-card/processor-card.component';
import { VideocardCardComponent } from '../part-cards/videocard-card/videocard-card.component';
import { PowersupplyCardComponent } from '../part-cards/powersupply-card/powersupply-card.component';



@NgModule({
  declarations: [
    PickerComponent
  ],
  imports: [
    CommonModule,
    PickerRoutingModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MotherboardCardComponent,
    MemoryCardComponent,
    ProcessorCardComponent,
    VideocardCardComponent,
    PowersupplyCardComponent
  ]
})
export class PickerModule { }
