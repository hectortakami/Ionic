import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../../services/ionic-storage.service';
import { MovieDetail } from '../../models/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  actionMovies: MovieDetail[];
  categories = [
    'Acción',
    'Animación',
    'Aventura',
    'Ciencia Ficción',
    'Comedia',
    'Crimen',
    'Drama',
    'Familia',
    'Fantasía',
    'Historia',
    'Misterio',
    'Romance',
    'Suspenso',
    'Terror'
  ];

  constructor(public ionicStorage: IonicStorageService) {}

  ngOnInit() {}
}
