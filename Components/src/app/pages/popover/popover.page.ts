import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoPage } from '../popover-info/popover-info.page';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss']
})
export class PopoverPage {
  constructor(public popoverController: PopoverController) {}

  async showPopover(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoPage,
      event: event,
      mode: 'ios',
      backdropDismiss: false
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    console.log(data);
  }
}
