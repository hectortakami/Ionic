import { Injectable } from '@angular/core';
import { MovieDetail } from '../models/interfaces';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicStorageService {
  favoriteMovies: MovieDetail[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {
    this.getStorage();
  }

  storeData(movie: MovieDetail) {
    let exists = false;
    let title = movie.title;
    if (movie.title.length >= 15) {
      title = `'${movie.title.slice(0, 15)}...'`;
    }

    for (const peli of this.favoriteMovies) {
      if (peli.id === movie.id) {
        exists = true;
        break;
      }
    }
    if (exists) {
      this.favoriteMovies = this.favoriteMovies.filter(data => {
        return data.id != movie.id;
      });
      this.storage.set('favoriteMovies', this.favoriteMovies);
      let msg = `'${title}' se ha eliminado de tus favoritos`;
      this.showToast(msg, 'danger');
      return;
    } else {
      this.favoriteMovies.unshift(movie);
      this.storage.set('favoriteMovies', this.favoriteMovies);
      let msg = `'${title}' se ha añadido a tus favoritos`;
      this.showToast(msg, 'primary');
      return !exists;
    }
  }

  async getStorage() {
    const moviesInStorage = await this.storage.get('favoriteMovies');
    this.favoriteMovies = moviesInStorage || [];
    return this.favoriteMovies;
  }

  async alreadyExists(id) {
    await this.getStorage();
    const exists = this.favoriteMovies.find(peli => peli.id === id);
    return exists ? true : false;
  }

  async showToast(msg: string, type: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: type,
      mode: 'ios'
    });
    toast.present();
  }
}
