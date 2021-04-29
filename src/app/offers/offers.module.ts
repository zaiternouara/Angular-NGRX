import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { OfferReducer } from "./state/offer.reducer";
import { OfferEffect } from "./state/customer.effects";
import { EffectsModule, Actions } from "@ngrx/effects";
import { OfferComponent } from './offer/offer.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { DeleteOfferComponent } from './delete-offer/delete-offer.component';
import { AllOffersComponent } from './all-offers/all-offers.component';

const OfferRoutes: Routes = [
  { path:"", component :  OfferComponent}
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OfferRoutes),
    StoreModule.forFeature("offers",  OfferReducer),
    EffectsModule.forFeature([OfferEffect])
  ],
  declarations: [
    AddOfferComponent,
    UpdateOfferComponent,
    DeleteOfferComponent,
    AllOffersComponent
  ]

})
export class OffersModule { }
