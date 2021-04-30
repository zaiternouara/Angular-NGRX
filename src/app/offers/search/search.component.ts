import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as offerActions from "../state/offer.actions";
import * as fromOffer from "../state/offer.reducer";
import { Offer,OfferSearch } from "../offer.model";
import { Observable } from "rxjs";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  offerForm!: FormGroup;
  offers$ :Observable <Offer[]>;
  error$: Observable<String>;
 constructor(
     private fb: FormBuilder,
    private store: Store<fromOffer.AppState>) { }


    ngOnInit() {
      this.offerForm = this.fb.group({
         name: ["", Validators.required],
         ville: [""],
         dateO: [""]
       });

       const offer$: Observable<Offer> = this.store.select(
         fromOffer.getCurrentOffer
       )

       offer$.subscribe(currentOffer => {
         if (currentOffer) {
           this.offerForm.patchValue({
             name: currentOffer.name,
             villeD: currentOffer.villeD,
             villeA: currentOffer.villeA,
             dateO: currentOffer.dateO,
             id: currentOffer.id
           });
         }
       })
       this.store.dispatch(new offerActions.LoadOffers());

     }

 searchOffer() {
   const newOffer: OfferSearch = {
     name: this.offerForm.get("name").value,
     ville: this.offerForm.get("ville").value,
     dateO: this.offerForm.get("dateO").value
   };
   var myHtml = document.getElementById('myHtml').innerHTML;
   //this.store.dispatch(new offerActions.CreateOffer(newOffer));

   this.store.dispatch(new offerActions.SearchOffers(newOffer));
   this.offers$=this.store.pipe(select(fromOffer.getOffers));
    this.error$ = this.store.pipe(select(fromOffer.getError));

   //var myHtml = document.getElementById('myHtml').innerHTML;


   this.offerForm.reset();
 }



   deleteOffer(offer: Offer) {
   if (confirm("Are You Sure You want to Delete the User?")) {
     this.store.dispatch(new offerActions.DeleteOffer(offer.id));
   }
 }

 editOffer(offer: Offer) {
   this.store.dispatch(new offerActions.LoadOffer(offer.id));
 }

}
