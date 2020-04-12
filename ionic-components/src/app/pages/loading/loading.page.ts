import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss']
})
export class LoadingPage implements OnInit {
  loading: any;
  constructor(public loadingController: LoadingController) {}

  ngOnInit() {}

  createLoading() {
    this.showLoading();
    setTimeout(() => {
      this.loading.dismiss();
    }, 4000);
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    return this.loading.present();
  }
}
