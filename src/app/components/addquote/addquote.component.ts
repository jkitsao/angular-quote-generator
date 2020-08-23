import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {
  @Output() addQuote:EventEmitter<any>=new EventEmitter()
name:string;
message:string;

  constructor() { }
  getId(){
    let randomId:number= Math.random()
    return randomId
   }
  getrandom(){
   let random=Math.floor(Math.random()*10)
    return random
  }
   img=[2,3,4,5,6,7]
   getUrl(){
    //  let random=Math.floor(Math.random()*1000)
    let randomUrl:string= `https://source.unsplash.com/collection/1907${this.img[this.getrandom()]}7/720x480`
    return randomUrl
   }
  ngOnInit(): void {
  }
onSubmit(){
  const quote={
    id:this.getId(),
    author:this.name,
    quote:this.message,
    upvote:0,
    downvote:0,
    created:Date.now(),
    bgimage:this.getUrl()

  }
  this.addQuote.emit(quote)

}
}
