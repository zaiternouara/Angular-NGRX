 import * as offerActions from "./offer.actions";
 import { Offer } from "../offer.model";
 import * as fromRoot from "../../state/app-state";


 export interface OfferState extends EntityState<Offer> {
   selectedCustomerId: number | null;
   loading: boolean;
   loaded: boolean;
   error: string;
 }

 export interface AppState extends fromRoot.AppState {
  offers: OfferState;
}

export const initialState: OfferState = {
  offers:[],
  loading: false,
  loaded: false,
  error: ""
}


export function offerrReducer(
  state = initialState,
  action: offerActions.Action
): OfferState {
  switch (action.type) {
    case  offerActions.OfferActionTypes.LOAD_OFFERS: {
      return  {
        ...state,
        loading: true
      }
    }
    case  offerActions.OfferActionTypes.LOAD_OFFERS_SUCCESS: {
      return  {
        ...state,
        loading: false,
        loaded: true,
        offers: action.payload
      }
    }
    case  offerActions.OfferActionTypes.LOAD_OFFERS_FAIL: {
      return  {
        ...state,
        offers:[],
        loading: false,
        loaded: false,
        error: action.payload
      }
    }
    default:{
      return state;
    }
  }
  }
