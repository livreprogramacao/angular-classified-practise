import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdsComponent } from './ads/ads.component';

const routes: Routes = [
  { path: 'ads', component: AdsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
