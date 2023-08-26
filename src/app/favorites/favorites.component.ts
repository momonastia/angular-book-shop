import { Component } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  favorites: Book[] = [];

  constructor(
    public favoriteService: FavoriteService
  ){}

  ngOnInit(): void {
    this.favorites = this.favoriteService.getFavorites();
  }

  removeFromFavorites(book: Book): void {
    this.favoriteService.removeFromFavorites(book);
    this.favorites = this.favoriteService.getFavorites();
  }

}
