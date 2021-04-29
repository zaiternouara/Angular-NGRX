import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { OfferService } from "../offer.service";
import * as offerActions from "../state/offer.actions";
import {Offer } from "../offer.model";
@Injectable()
export class OfferEffect {
  constructor(
    private actions$: Actions,
    private offerService: OfferService
  ) {}

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType<customerActions.LoadOffers>(
      offerActions.OfferActionTypes.LOAD_Offers
    ),
    mergeMap((action: offerActions.LoadOffers) =>
      this.offerService.getOffers().pipe(
        map(
          (offers: Offer[]) =>
            new offerActions.LoadOffersSucces(offers)
        ),
        catchError(err => of(new offerActions.LoadOffersFAIL(err)))
      )
    )
  );
