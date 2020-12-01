import { Pipe, PipeTransform } from '@angular/core';
import { MovieDetail } from '../models/interfaces';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {
  transform(movies: MovieDetail[], category: string): MovieDetail[] {
    if (movies.length <= 0) {
      return [];
    } else {
      let categoryMovies: MovieDetail[] = [];
      movies.forEach(movie => {
        movie.genres.forEach(genre => {
          if (genre.name == category) {
            categoryMovies.push(movie);
          }
        });
      });
      if (categoryMovies.length > 0) {
        return categoryMovies;
      } else {
        return null;
      }
    }
  }
}
