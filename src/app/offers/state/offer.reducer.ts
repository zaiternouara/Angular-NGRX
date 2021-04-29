 import * as offerActions from "./offer.actions";
 import { Offer } from "../offer.model";
 import * as fromRoot from "../../state/app-state";
 import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";

 export interface OfferState extends EntityState<Offer> {
   selectedCustomerId: number | null;
   loading: boolean;
   loaded: boolean;
   error: string;
 }

 export interface AppState extends fromRoot.AppState {
  offers: OfferState;
}
export const offerAdapter: EntityAdapter<Offer> = createEntityAdapter<
  Offer
>();

export const defaultOffer: OfferState = {
  ids: [],
  entities: {},
  selectedCustomerId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = offerAdapter.getInitialState(defaultOffer);


export function OfferReducer(
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
      return  return  offerAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case  offerActions.OfferActionTypes.LOAD_OFFERS_FAIL: {
      return  {
        ...state,
        entities:{},
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

  const getOfferFeatureState = createFeatureSelector<OfferState>(
    "offers"
  );

export const getOffers = createSelector(
  getOfferFeatureState,
  offerAdapter.getSelectors().selectAll
);
export const getOffersLoading = createSelector(
  getOfferFeatureState,
  (state:OfferState)=>state.loading
);
export const getOffersLoaded = createSelector(
  getOfferFeatureState,
  (state:OfferState)=>state.loaded
);
export const getError = createSelector(
  getOfferFeatureState,
  (state:OfferState)=>state.error
);
