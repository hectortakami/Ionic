import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss']
})
export class RangePage implements OnInit {
  range = '10';

  constructor() {}

  ngOnInit() {}

  changeRange(event) {
    this.range = event.detail.value;
  }
}
