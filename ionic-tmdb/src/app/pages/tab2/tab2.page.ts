import { Component } from '@angular/core';
import { MovieDbService } from '../../services/movie-db.service';
import { Movie } from '../../models/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  searchTerm: string = '';
  searchResults: Movie[];

  constructor(private movieService: MovieDbService) {}

  onSearchChange(event) {
    this.searchTerm = event.detail.value;
    if (this.searchTerm.length <= 0) {
      this.searchResults = [];
      this.searchTerm = '';
      return;
    } else {
      this.movieService.searchByTerm(this.searchTerm).subscribe(resp => {
        this.searchResults = resp.results;
      });
    }
  }
}
