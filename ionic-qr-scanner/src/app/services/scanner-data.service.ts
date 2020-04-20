import { Injectable } from '@angular/core';
import { ScanData } from '../models/scan-data';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class ScannerDataService {
  storedScans: ScanData[] = [];

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private toastCtrl: ToastController
  ) {
    this.storage.get('storedScans').then(register => {
      this.storedScans = register || [];
    });
  }

  storeScan(format: string, text: string) {
    // Stores in local storage all data related to the
    // Barcode or QR scanning assigning it's type depending of the data coded in it
    const newScan = new ScanData(format, text);
    this.storedScans.unshift(newScan);
    this.storage.set('storedScans', this.storedScans);
    this.openScan(newScan);
  }

  openScan(scan: ScanData) {
    this.navCtrl.navigateForward('/tabs/tab2');
    switch (scan.type) {
      case `web site`:
        // Open Browser with the code URL
        this.iab.create(scan.text, '_system');
        break;
      case `map`:
        const coordinates = scan.text.substr(4, scan.text.length).split(',');
        const latitude = coordinates[0];
        const longitude = coordinates[1];
        // Navigate to map view page
        this.navCtrl.navigateForward(`/tabs/tab2/map/${latitude}/${longitude}`);
        break;
      // HERE GOES MORE IMPLEMENTATION FOR MORE SCAN TYPES
      default:
        this.showToast(scan.type);
        break;
    }
  }

  async showToast(scanType: string) {
    const toast = await this.toastCtrl.create({
      message: `Implementation for '${scanType}' isn't ready, yet!`,
      duration: 4000,
      color: 'tertiary',
      mode: 'ios'
    });
    toast.present();
  }
}
