import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparerComponent } from './comparer.component';

const routes: Routes = [{ path: '', component: ComparerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComparerRoutingModule { }
