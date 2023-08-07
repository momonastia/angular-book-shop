import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../interface/Book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

 /*  myInterval: any = null;

  ngOnInit(): void {
    this.myInterval = setInterval(() => {console.log("Hello!")}, 1000)
  } */

  @Input() book: Book = {} as Book
 /*  @Output() bookEmitter = new EventEmitter<Book>() */

  constructor(
    private cartService: CartService
  ) {}

  addToCart(){
    this.cartService.add(this.book)
  /*   this.bookEmitter.emit(this.book) */
  }

  /* ngOnDestroy(): void {
    clearInterval(this.myInterval);
  } */
}
