import { Component } from '@angular/core';
import { MovieDbService } from '../../services/movie-db.service';
import { Movie } from '../../models/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  onCinemaMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  constructor(private movieService: MovieDbService) {
    this.getCinemasList();
    this.getPopularList();
    this.getUpcomingList();
    this.getTopRatedList();
  }

  loadOtherPage(movieList: number) {
    switch (movieList) {
      case 0:
        this.getPopularList();
        break;
      case 1:
        this.getUpcomingList();
        break;
      case 2:
        this.getTopRatedList();
        break;

      default:
        break;
    }
  }

  getCinemasList() {
    this.movieService.getOnCinemas().subscribe(resp => {
      this.onCinemaMovies.push(...resp.results);
    });
  }
  getPopularList() {
    this.movieService.getPopularMovies().subscribe(resp => {
      this.popularMovies.push(...resp.results);
    });
  }
  getTopRatedList() {
    this.movieService.getTopRated().subscribe(resp => {
      this.topRatedMovies.push(...resp.results);
    });
  }
  getUpcomingList() {
    this.movieService.getUpcomingMovies().subscribe(resp => {
      this.upcomingMovies.push(...resp.results);
    });
  }
}
