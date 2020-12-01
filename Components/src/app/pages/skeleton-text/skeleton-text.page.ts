import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss']
})
export class SkeletonTextPage implements OnInit {
  items = new Array(5);
  constructor() {}

  ngOnInit() {}
}
