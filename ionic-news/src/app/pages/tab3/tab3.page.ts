import { Component } from '@angular/core';
import { Article } from '../../models/interfaces';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favorites: Article[] = [];
  constructor(public dataStorage: DataStorageService) {}
}
