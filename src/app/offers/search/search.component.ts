import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as offerActions from "../state/offer.actions";
import * as fromOffer from "../state/offer.reducer";
import { OfferSearch } from "../offer.model";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  offerForm!: FormGroup;


  constructor(
     private fb: FormBuilder,
    private store: Store<fromOffer.AppState>) { }

    ngOnInit() {
       this.offerForm = this.fb.group({
         name: ["", Validators.required],
         ville: [""],
         dateO: [""]
       });

     }

     searchOffer() {
   const newOffer: OfferSearch = {
     name: this.offerForm.get("name").value,
     ville: this.offerForm.get("ville").value,
     dateO: this.offerForm.get("dateO").value
   };
   var myHtml = document.getElementById('myHtml').innerHTML;
   //this.store.dispatch(new offerActions.CreateOffer(newOffer));

   this.offerForm.reset();
 }

}
