import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder-group',
  templateUrl: './reorder-group.page.html',
  styleUrls: ['./reorder-group.page.scss']
})
export class ReorderGroupPage implements OnInit {
  toggle = true;

  heroes = [
    'Iron Man',
    'Captain America',
    'Hulk',
    'Thor',
    'Black Widow',
    'Hawkeye'
  ];
  constructor() {}

  ngOnInit() {}

  doReorder(ev: any) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    const tmp = this.heroes[ev.detail.from];
    this.heroes[ev.detail.from] = this.heroes[ev.detail.to];
    this.heroes[ev.detail.to] = tmp;
    ev.detail.complete();
    console.log(this.heroes);
  }

  onClick() {
    this.toggle = !this.toggle;
  }
}
