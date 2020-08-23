import { Quote } from '@angular/compiler';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
@Input() quote:any;
@Output()deleteQuote:EventEmitter<Quote>=new EventEmitter();
handleUpvote(){
  this.quote.upvote+=1
}
handleDownvote(){
  this.quote.downvote+=1

  
}
delete(quote:Quote){
 this.deleteQuote.emit(quote)
}

  constructor() { 
   
  }

  ngOnInit(): void {
   
  }

}
