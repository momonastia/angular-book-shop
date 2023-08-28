import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../interface/Book';
import { CartService } from '../services/cart.service';
import { FavoriteService } from '../favorite.service';

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
  isInCart: boolean = false

  constructor(
    private cartService: CartService,
    public favoriteService: FavoriteService
    ) {}

  addToCart(){
    this.cartService.add(this.book)
    this.isInCart = true
  /*   this.bookEmitter.emit(this.book) */
  }

  removeFromCart(){
    this.cartService.remove(this.book)
    this.isInCart = false
  }

  toggleFavorites(book: Book): void {
    if (this.favoriteService.isFavorite(book)) {
      this.favoriteService.removeFromFavorites(book);
    } else {
      this.favoriteService.addToFavorites(book);
    }
    console.log('After toggle:', this.favoriteService.isFavorite(book));
  }

  isFavorite(book: Book): boolean {
    return this.favoriteService.isFavorite(book);
  }

  /* ngOnDestroy(): void {
    clearInterval(this.myInterval);
  } */
}
