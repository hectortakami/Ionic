import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { ResultTopHeadlines, Article } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey = environment.apiKey;
  url = 'http://newsapi.org/v2';
  pageNum = 0;
  categories = {
    general: 0,
    business: 0,
    health: 0,
    entertainment: 0,
    science: 0,
    sports: 0,
    technology: 0
  };
  actualCategory = 'general';

  constructor(private http: HttpClient) {}

  getTopHeadlines() {
    this.pageNum++;
    return this.http
      .get(
        `${this.url}/top-headlines?country=us&page=${this.pageNum}&apiKey=${this.apiKey}`
      )
      .pipe(
        map((response: ResultTopHeadlines): Article[] => {
          return response.articles;
        })
      );
  }

  getNewsByCategory(category: string) {
    if (this.actualCategory != category) {
      this.categories[this.actualCategory] = 0;
      this.actualCategory = category;
    }
    const categoryPage = this.categories[this.actualCategory]++;
    return this.http
      .get(
        `${this.url}/top-headlines?country=us&category=${category}&page=${categoryPage}&apiKey=${this.apiKey}`
      )
      .pipe(
        map((response: ResultTopHeadlines): Article[] => {
          return response.articles;
        })
      );
  }
}
