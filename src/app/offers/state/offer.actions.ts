 import {Action} from "@ngrx/store";

 import {Offer} from "../offer.model";

 export enum OfferActionTypes{
   LOAD_OFFERS="[Offer] Load Offers",
  LOAD_OFFERS_SUCCESS="[Offer] Load Offers Succes",
  LOAD_OFFERS_FAIL="[Offer] Load Offers FAIL"
}

export class  LoadOffers implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS;
}

export class  LoadOffersSucces implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS_SUCCESS;

  constructor(public payload: Offer[] ){}
}

export class  LoadOffersEFAIL implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS_FAIL;
  constructor(public payload: string){}
}

export type Action = LoadOffers | LoadOffersSucces | LoadOffersFAIL;
