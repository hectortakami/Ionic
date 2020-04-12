import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getOptions() {
    return this.http.get('/assets/data/menu.json');
  }

  getSampleData() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
}
