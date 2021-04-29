import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as offerActions from "../state/offer.actions";
import * as fromOffer from "../state/offer.reducer";
import { Offer } from "../offer.model";


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offerForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private store: Store<fromOffer.AppState>) { }

    ngOnInit() {
       this.offerForm = this.fb.group({
         name: ["", Validators.required],
         phone: ["", Validators.required],
         address: ["", Validators.required],
         membership: ["", Validators.required]
       });
     }

     createOffer() {
   const newOffer: Offer = {
     name: this.offerForm.get("name").value,
     phone: this.offerForm.get("phone").value,
     address: this.offerForm.get("address").value,
     membership: this.offerForm.get("membership").value
   };

   this.store.dispatch(new offerActions.CreateOffer(newOffer));

   this.offerForm.reset();
 }

}
