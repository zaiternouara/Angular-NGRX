import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


import {Main} from "./main-page/main-page.component";
const appRoutes: Routes = [
  { path:", component : Main"},
  {
    path: "offers",
    loadChildren:"../app/offers/offers.module#OffersModule"
  }
];

@NgModule({

  imports: [
    CommonModule
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AngularNGRXRoutingModule { }
