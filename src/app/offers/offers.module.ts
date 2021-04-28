import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";


import { OfferComponent } from './offer/offer.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { DeleteOfferComponent } from './delete-offer/delete-offer.component';
import { AllOffersComponent } from './all-offers/all-offers.component';

const offerRoutes: Routes = [
  { path:", component :  OfferComponent"}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(offerRoutes)
  ],
  declarations: [
    OfferComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    DeleteOfferComponent,
    AllOffersComponent
  ]

})
export class OffersModule { }
