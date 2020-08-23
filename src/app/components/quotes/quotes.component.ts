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
  constructor() { }

  ngOnInit() {
    this.quotes=[
      { id:this.getId(),
        author:'fujo',
        quote:'live once hell yah',
        upvote:0,
        downvote:0,
        bgimage:'https://source.unsplash.com/user/erondu/720x480',
        created:'2020',
        
      },
      {id:this.getId(),
        author:'kitsao',
        quote:'live once hell yah',
        upvote:0,
        downvote:0,
        bgimage:'https://source.unsplash.com/collection/190737/720x480',
        created:'2020',
        

      },
      {id:this.getId(),
        author:'kitsao',
        quote:'lily was a little girl afraid of the big wide world she was right and you were wrong',
        bgimage:'https://source.unsplash.com/collection/190728/720x480',
        downvote:0,
        upvote:0,
        created:'2020',
        

      },
      {id:this.getId(),
        author:'jackson',
        quote:'live once hell yah',
        downvote:0,
        upvote:0,
        bgimage:'https://source.unsplash.com/collection/190727/720x480',
        created:'2020',
        

      },
      {id:this.getId(),
        author:'kevin',
        quote:'live once hell yah',
        downvote:0,
        upvote:0,
        bgimage:'https://source.unsplash.com/random',
        created:'2020',
        

      },
     
    ]
  }
 
}
