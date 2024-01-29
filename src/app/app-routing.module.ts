import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { errorRoute } from './core/error/error.route';

const LAYOUT_ROUTES = [...errorRoute];
const routes: Routes = [
  { 
    path: 'assureur', 
    loadChildren: () => import('./assureur/assureur.module').then((m) => m.AssureurModule),
    data: {
      authorities: [],
      pageTitle: 'error.title',
     }
  },
  { 
    path: 'assure', 
    loadChildren: () => import('./assure/assure.module').then((m) => m.AssureModule),
    data: {
      authorities: [],
      pageTitle: 'error.title',
     }
  },
  {
    path: '',
    redirectTo: 'assure',
    pathMatch: "prefix"
  },
  ...LAYOUT_ROUTES,
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
