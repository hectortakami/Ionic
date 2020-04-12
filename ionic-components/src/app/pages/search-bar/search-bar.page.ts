import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss']
})
export class SearchBarPage implements OnInit {
  data: any[] = [];
  term: string = '';

  constructor(private sampleService: MenuService) {
    this.sampleService.getSampleData().subscribe((res: any[]) => {
      this.data = res;
    });
  }

  ngOnInit() {}

  onSearchChange(event) {
    const searchTerm: string = event.detail.value;
    if (searchTerm.length == 0) {
      return;
    } else {
      this.term = searchTerm;
    }
  }
}
