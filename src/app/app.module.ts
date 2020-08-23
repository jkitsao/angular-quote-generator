import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteComponent } from './components/quote/quote.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddquoteComponent } from './components/addquote/addquote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteComponent,
    NavbarComponent,
    AddquoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
