import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditorComponent } from './editor/editor.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MemoryEditorComponent } from './part-editors/memory-editor/memory-editor.component';
import { MotherboardEditorComponent } from './part-editors/motherboard-editor/motherboard-editor.component';
import { ProcessorEditorComponent } from './part-editors/processor-editor/processor-editor.component';
import { VideocardEditorComponent } from './part-editors/videocard-editor/videocard-editor.component';
import { PowersupplyEditorComponent } from './part-editors/powersupply-editor/powersupply-editor.component';


@NgModule({
  declarations: [
    AccountComponent,
    EditorComponent,
    MemoryEditorComponent,
    MotherboardEditorComponent,
    ProcessorEditorComponent,
    VideocardEditorComponent,
    PowersupplyEditorComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ]
})
export class AccountModule { }
