import { Component, OnInit, Input } from '@angular/core';
import { MovieDbService } from '../../services/movie-db.service';
import { MovieDetail } from '../../models/interfaces';
import { ModalController } from '@ionic/angular';
import { IonicStorageService } from '../../services/ionic-storage.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movieID;

  movie: MovieDetail = null;
  movieCredits: any;
  exists: boolean;

  slidesOptions = {
    slidesPerView: 2.2,
    freeMode: true
  };

  constructor(
    private movieService: MovieDbService,
    private modalCrtl: ModalController,
    public ionicStorage: IonicStorageService
  ) {}

  ngOnInit() {
    this.movieService.getMovieByID(this.movieID).subscribe(resp => {
      this.movie = resp;
    });
    this.movieService.getMovieCredits(this.movieID).subscribe(resp => {
      this.movieCredits = resp;
    });
    this.ionicStorage.alreadyExists(this.movieID).then(resp => {
      this.exists = resp;
    });
  }

  closeModal() {
    this.modalCrtl.dismiss();
  }

  add2Favorites() {
    this.ionicStorage.storeData(this.movie);
    this.exists = !this.exists;
  }
}
