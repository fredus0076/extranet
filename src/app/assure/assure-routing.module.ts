import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssureComponent } from './assure';

const routes: Routes = [
  {path: '', component: AssureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssureRoutingModule { }
