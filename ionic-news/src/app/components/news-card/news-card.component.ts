import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataStorageService } from '../../services/data-storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() article: Article;
  @Input() inFavorites = false;
  constructor(
    private iab: InAppBrowser,
    public actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataStorage: DataStorageService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  async openSettings() {
    let storeOrDeleteFavs;
    if (this.inFavorites) {
      storeOrDeleteFavs = {
        text: 'Remove from Favorites',
        icon: 'trash',
        handler: () => {
          this.removeFavorites();
        }
      };
    } else {
      storeOrDeleteFavs = {
        text: 'Add to Favorites',
        icon: 'heart',
        handler: () => {
          this.saveFavorites();
        }
      };
    }

    const actionSheet = await this.actionSheetController.create({
      header: this.article.title,
      mode: 'ios',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            this.share();
          }
        },
        storeOrDeleteFavs,
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    await actionSheet.present();
  }

  openUrl(url: string) {
    this.iab.create(url, '_system');
  }

  share() {
    this.socialSharing
      .share(
        this.article.title,
        this.article.source.name,
        null,
        this.article.url
      )
      .then()
      .catch();
  }

  saveFavorites() {
    this.dataStorage.storeData(this.article);
    this.showToast('primary', `Article added to your favorite news`);
  }

  removeFavorites() {
    this.dataStorage.removeFromStorage(this.article);
    this.showToast('danger', `Article removed from favorite news`);
  }

  async showToast(color: string, msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: color,
      mode: 'ios'
    });
    toast.present();
  }
}
