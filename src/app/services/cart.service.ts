import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }

  add(book: Book) {
    console.log(book)
    this.cart.push(book)

  }

  get() {
    return this.cart
  }
}
