import { Component } from '@angular/core';

interface Book {
  name: string,
  author: string,
  image: string
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[] = [
    {
      name: "Clean Code",
      author: "Robert C Martin",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX198_BO1,204,203,200_QL40_ML2_.jpg"
    },
    {
      name: "Pragmatic Programmer",
      author: " Andrew Hunt, David Thomas",
      image: "https://m.media-amazon.com/images/I/71Si5qSPctL._AC_UL600_FMwebp_QL65_.jpg"
    },
  ]

  isShowing: boolean = true;

/*   isDisabled: boolean = false */

  /* handleClick() {
    this.isDisabled = true;
  }

  myName: string = "";
 */
  }
