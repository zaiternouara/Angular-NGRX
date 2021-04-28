import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Store} from "@ngrx/store";
import { AppRoutingModule } from './angular-ngrx-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    Store.forRoot({}),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
