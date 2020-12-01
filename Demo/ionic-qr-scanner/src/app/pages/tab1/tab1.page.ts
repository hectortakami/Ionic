import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ScannerDataService } from '../../services/scanner-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    private barcodeScanner: BarcodeScanner,
    private scannerData: ScannerDataService
  ) {}

  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  launchScanner() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        if (!barcodeData.cancelled) {
          this.scannerData.storeScan(barcodeData.format, barcodeData.text);
        }
      })
      .catch(err => {
        console.log('ERROR: Couldn`t recognize code');
      });
  }
}
