import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssureurRoutingModule } from './assureur-routing.module';
import { AssureurComponent } from './assureur.component';

@NgModule({
  declarations: [
    AssureurComponent,
  ],
  imports: [
    CommonModule,
    AssureurRoutingModule,
  ],
})
export class AssureurModule { }
