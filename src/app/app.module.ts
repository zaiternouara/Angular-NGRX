import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{StoreModule} from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({

  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
