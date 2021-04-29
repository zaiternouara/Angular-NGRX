import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { OfferService } from "../offer.service";
import * as offerActions from "../state/offer.actions";
import {Offer } from "../offer.module";
@Injectable()
export class OfferEffect {
  constructor(
    private actions$: Actions,
    private offerService: OfferService
  ) {}

  @Effect()
  LoadOffers$: Observable<Action> = this.actions$.pipe(
    ofType<offerActions.LoadOffers>(
      offerActions.OfferActionTypes.LOAD_OFFERS
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
}
