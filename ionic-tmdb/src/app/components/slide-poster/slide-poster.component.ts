import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/interfaces';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slide-poster',
  templateUrl: './slide-poster.component.html',
  styleUrls: ['./slide-poster.component.scss']
})
export class SlidePosterComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() title: string;
  @Input() isSearch: boolean;
  @Output() loadMore = new EventEmitter();

  slidesOptions = {
    slidesPerView: 2.5,
    freeMode: true
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onClick() {
    this.loadMore.emit();
  }

  async movieDetail(movieID: string) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: { movieID }
    });

    modal.present();
  }
}
