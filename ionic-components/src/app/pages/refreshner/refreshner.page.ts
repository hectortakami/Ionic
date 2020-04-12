import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refreshner',
  templateUrl: './refreshner.page.html',
  styleUrls: ['./refreshner.page.scss']
})
export class RefreshnerPage implements OnInit {
  items = new Array();

  constructor() {}

  ngOnInit() {}

  doRefresh(event) {
    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 2000);
  }
}
