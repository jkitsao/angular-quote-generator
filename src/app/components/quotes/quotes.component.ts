import { Component, OnInit } from '@angular/core';
import {Quote} from '../../modals/quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]
  getId(){
   let randomId:number= Math.random()
   return randomId
  }
  deleteQuote(quote:Quote){
    console.log('delete me')
    this.quotes=this.quotes.filter((q)=>{
      return q.id!=quote.id
    })
  }
  addQuote(quote:Quote){
    this.quotes.unshift(quote)
    // console.log(quote)

  }
  constructor() { }

  ngOnInit() {
    this.quotes=[
      { id:this.getId(),
        author:'Jane Doe',
        quote:'Happiness is a direction, not a place',
        upvote:0,
        downvote:0,
        bgimage:'https://source.unsplash.com/user/erondu/720x480',
        created:Date.now(),
        
      },
      {id:this.getId(),
        author:'James persons',
        quote:'It is not how much we have, but how much we enjoy, that makes happiness',
        upvote:0,
        downvote:0,
        bgimage:'https://source.unsplash.com/collection/190737/720x480',
        created:1598216988421,
        

      },
      {id:this.getId(),
        author:'Charles law',
        quote:'lily was a little girl afraid of the big wide world she was right and you were wrong',
        bgimage:'https://source.unsplash.com/collection/190728/720x480',
        downvote:0,
        upvote:0,
        created:1598216999421,
        

      },
      {id:this.getId(),
        author:'jackson',
        quote:'A great obstacle to happiness is to expect too much happiness.',
        downvote:0,
        upvote:0,
        bgimage:'https://source.unsplash.com/collection/190727/720x480',
        created:1598216988721,
        

      },
      {id:this.getId(),
        author:'kevin',
        quote:'Happiness is not something ready made',
        downvote:0,
        upvote:0,
        bgimage:'https://source.unsplash.com/random',
        created:1598216967421,
        

      },
     
    ]
  }
 
}
