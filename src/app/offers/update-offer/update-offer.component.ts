import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as offerActions from "../state/offer.actions";
import * as fromOffer from "../state/offer.reducer";
import { Offer } from "../offer.model";

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {
  offerForm: FormGroup;


  constructor(
     private fb: FormBuilder,
    private store: Store<fromOffer.AppState>) { }

    ngOnInit() {
      this.offerForm = this.fb.group({
        name: ["", Validators.required],
        phone: ["", Validators.required],
        address: ["", Validators.required],
        membership: ["", Validators.required],
        id: null
      })

      const offer$: Observable<Offer> = this.store.select(
        fromOffer.getCurrentOffer
      )

      offer$.subscribe(currentOffer => {
        if (currentOffer) {
          this.offerForm.patchValue({
            name: currentOffer.name,
            phone: currentOffer.phone,
            address: currentOffer.address,
            membership: currentOffer.membership,
            id: currentOffer.id
          });
        }
      })
    }

    updateOffer() {
      const updatedOffer: Offer = {
        name: this.offerForm.get("name").value,
        phone: this.offerForm.get("phone").value,
        address: this.offerForm.get("address").value,
        membership: this.offerForm.get("membership").value,
        id: this.offerForm.get("id").value
      };

      this.store.dispatch(new offerActions.UpdateOffer(updatedOffer))
    }

}
