import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  components = [];

  constructor(private menuService: MenuService) {
    this.menuService.getOptions().subscribe((data: []) => {
      this.components = data;
    });
  }

  ngOnInit() {}
}
