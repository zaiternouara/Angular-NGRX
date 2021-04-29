import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as offerActions from "../state/offer.actions";
import * as fromOffer from "../state/offer.reducer";
import { Offer } from "../offer.model";

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit {
offers$ :Observable <Offer[]>;
  constructor(private store: Store<fromOffer.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new offerActions.LoadOffers());
    this.offers$=this.store.pipe(select(fromOffer.getOffers))
  }

}
