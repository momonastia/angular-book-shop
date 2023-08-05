import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
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
  }
}
