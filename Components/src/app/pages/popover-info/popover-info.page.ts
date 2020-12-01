import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.page.html',
  styleUrls: ['./popover-info.page.scss']
})
export class PopoverInfoPage implements OnInit {
  items = new Array(10);
  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  onClick(idx: number) {
    this.popoverCtrl.dismiss({ data: `Item ${idx + 1}` });
  }
}
