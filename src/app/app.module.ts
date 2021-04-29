import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import{StoreModule} from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AppRoutingModule } from "./app-routing.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({

  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    HttpClientModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
