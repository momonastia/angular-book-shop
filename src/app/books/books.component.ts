import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  name: string = "Clean Code"
  author: string = "Robert C Martin"
  src: string = "https://m.media-amazon.com/images/I/41xShlnTZTL._SX198_BO1,204,203,200_QL40_ML2_.jpg"

  isDisabled: boolean = false
}
