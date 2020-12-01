import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  components = [];

  constructor(
    private menuService: MenuService,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.menuService.getOptions().subscribe((data: []) => {
      this.components = data;
    });
  }

  redirectTo(path: string) {
    this.router.navigate([`${path}`]);
    this.menuCtrl.close();
  }
}
