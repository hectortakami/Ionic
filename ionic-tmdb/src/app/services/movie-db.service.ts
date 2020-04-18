import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MovieDBResult,
  MovieDetail,
  CreditsResult
} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {
  apiKey = '3562a77d8968c9e30b3d1410e3812018';
  moviesURL = 'https://api.themoviedb.org/3/movie';
  pages = {
    popularMovies: 0,
    topRated: 0,
    upcomingMovies: 0
  };

  constructor(private http: HttpClient) {}

  getOnCinemas() {
    return this.http.get<MovieDBResult>(
      `${this.moviesURL}/now_playing?api_key=${this.apiKey}&language=es-MX&page=1`
    );
  }

  getPopularMovies() {
    this.pages.popularMovies++;
    return this.http.get<MovieDBResult>(
      `${this.moviesURL}/popular?api_key=${this.apiKey}&language=es-MX&page=${this.pages.popularMovies}`
    );
  }

  getTopRated() {
    this.pages.topRated++;
    return this.http.get<MovieDBResult>(
      `${this.moviesURL}/top_rated?api_key=${this.apiKey}&language=es-MX&page=${this.pages.topRated}`
    );
  }

  getUpcomingMovies() {
    this.pages.upcomingMovies++;
    return this.http.get<MovieDBResult>(
      `${this.moviesURL}/upcoming?api_key=${this.apiKey}&language=es-MX&page=${this.pages.upcomingMovies}`
    );
  }

  getMovieByID(movieID: number) {
    return this.http.get<MovieDetail>(
      `${this.moviesURL}/${movieID}?api_key=${this.apiKey}&language=es-MX`
    );
  }

  getMovieCredits(movieID: number) {
    return this.http.get<CreditsResult>(
      `${this.moviesURL}/${movieID}/credits?api_key=${this.apiKey}&language=es-MX`
    );
  }

  searchByTerm(query: string) {
    return this.http.get<MovieDBResult>(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=es-MX&query=${query}&page=1`
    );
  }
}
