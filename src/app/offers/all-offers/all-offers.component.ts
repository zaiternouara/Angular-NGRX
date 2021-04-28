import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";


@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit {
offers;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch({type: 'LOAD_OFFERS'})
    this.store.subscribe(state=>(this.offers=state.offers.offer))
  }

}
