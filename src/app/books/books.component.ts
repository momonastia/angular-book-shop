import { Component } from '@angular/core';
import { Book } from '../interface/Book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[] = [
    {
      name: "clean code",
      author: "Robert C Martin",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX198_BO1,204,203,200_QL40_ML2_.jpg",
      amount: 700
    },
    {
      name: "pragmatic programmer",
      author: " Andrew Hunt, David Thomas",
      image: "https://m.media-amazon.com/images/I/71Si5qSPctL._AC_UL600_FMwebp_QL65_.jpg",
      amount: 800
    },
  ]

  cart: Book[] = [];

  isShowing: boolean = true;

  addToCart(event: Book) {
    console.log(event)
  }

/*   isDisabled: boolean = false */

  /* handleClick() {
    this.isDisabled = true;
  }

  myName: string = "";
 */
  }
