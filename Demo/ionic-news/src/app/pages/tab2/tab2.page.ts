import { Component, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/interfaces';
import { IonInfiniteScroll, IonContent } from '@ionic/angular';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonInfiniteScroll, { static: false }) scroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  categories = [
    'general',
    'business',
    'health',
    'entertainment',
    'science',
    'sports',
    'technology'
  ];

  articles: Article[];
  category = 'general';

  constructor(private _newsService: NewsService) {
    this._newsService.getNewsByCategory(this.category).subscribe(news => {
      this.articles = news;
    });
  }

  segmentChanged(event) {
    if (this.category != event.detail.value) {
      this.content.scrollToTop();
      this.scroll.disabled = false;
    }
    this.category = event.detail.value;
    this._newsService.getNewsByCategory(this.category).subscribe(news => {
      this.articles = news;
    });
  }

  loadData(event) {
    this._newsService.getNewsByCategory(this.category).subscribe(news => {
      if (news.length == 0) {
        this.scroll.disabled = true;
      } else {
        this.articles.push(...news);
        event.target.complete();
      }
    });
  }
}
