import { Component, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll, { static: false }) scroll: IonInfiniteScroll;

  articles: Article[] = [];
  constructor(private _newsService: NewsService) {
    this._newsService.getTopHeadlines().subscribe((news: Article[]) => {
      this.articles.push(...news);
    });
  }

  loadData(event) {
    this._newsService.getTopHeadlines().subscribe((news: Article[]) => {
      if (news.length == 0) {
        this.scroll.disabled = true;
      } else {
        this.articles.push(...news);
        event.target.complete();
      }
    });
  }
}
