import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssureurComponent } from './assureur.component';

const routes: Routes = [
  {path: '', component: AssureurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssureurRoutingModule { }
