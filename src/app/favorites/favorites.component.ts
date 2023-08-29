import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  @Input() book: Book = {} as Book

  constructor(public favoriteService: FavoriteService) {}

  removeFromFavorites(book: Book): void {
    this.favoriteService.removeFromFavorites(book);
  }
}
