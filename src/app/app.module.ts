import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteComponent } from './components/quote/quote.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddquoteComponent } from './components/addquote/addquote.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteComponent,
    NavbarComponent,
    AddquoteComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
