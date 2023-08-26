import { Injectable } from '@angular/core';
import { Book } from './interface/Book';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favorites: Book[] = [];

  getFavorites(): Book[] {
    return this.favorites;
  }

  addToFavorites(book: Book): void {
    if (!this.favorites.includes(book)) {
      this.favorites.push(book);
    }
    console.log("Added", this.favorites)
  }

  removeFromFavorites(book: Book): void {
    const index = this.favorites.indexOf(book);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
    console.log("Removed", this.favorites)
  }

  isFavorite(book: Book): boolean {
    return this.favorites.some(favorite => favorite.name === book.name);
  }

  constructor() { }
}
