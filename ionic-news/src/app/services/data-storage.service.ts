import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  public favoriteArticles: Article[] = [];

  constructor(private storage: Storage) {}

  storeData(article: Article) {
    const exists = this.favoriteArticles.find(
      news => news.title === article.title
    );
    if (!exists) {
      this.favoriteArticles.unshift(article);
      this.storage.set('favorites', this.favoriteArticles);
    }
  }

  async loadStorage() {
    const favs = await this.storage.get('favorites');
    if (favs) {
      this.favoriteArticles = favs;
    } else {
      this.favoriteArticles = [];
    }
  }

  removeFromStorage(article: Article) {
    this.favoriteArticles = this.favoriteArticles.filter(
      news => news.title !== article.title
    );
    this.storage.set('favorites', this.favoriteArticles);
  }
}
