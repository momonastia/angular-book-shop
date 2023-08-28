import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(public favoriteService: FavoriteService) {}

  ngOnInit(): void {}

  removeFromFavorites(book: Book): void {
    this.favoriteService.removeFromFavorites(book);
  }
}
