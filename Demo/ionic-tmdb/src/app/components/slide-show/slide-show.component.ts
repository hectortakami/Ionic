import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/interfaces';
import { ModalController } from '@ionic/angular';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() title: string;

  slidesOptions = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async movieDetail(movieID: string) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: { movieID }
    });

    modal.present();
  }
}
