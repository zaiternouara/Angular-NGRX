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
): CustomerState {
  switch (action.type) {
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
      return customerAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case customerActions.CustomerActionTypes.LOAD_CUSTOMER_SUCCESS: {
      return customerAdapter.addOne(action.payload, {
        ...state,
        selectedCustomerId: action.payload.id
      });
    }
    case customerActions.CustomerActionTypes.LOAD_CUSTOMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case customerActions.CustomerActionTypes.CREATE_CUSTOMER_SUCCESS: {
      return customerAdapter.addOne(action.payload, state);
    }
    case customerActions.CustomerActionTypes.CREATE_CUSTOMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case customerActions.CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS: {
      return customerAdapter.updateOne(action.payload, state);
    }
    case customerActions.CustomerActionTypes.UPDATE_CUSTOMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case customerActions.CustomerActionTypes.DELETE_CUSTOMER_SUCCESS: {
      return customerAdapter.removeOne(action.payload, state);
    }
    case customerActions.CustomerActionTypes.DELETE_CUSTOMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
