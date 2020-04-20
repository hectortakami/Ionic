import { Component } from '@angular/core';
import { ScannerDataService } from '../../services/scanner-data.service';
import { ScanData } from '../../models/scan-data';
import { FileSystemService } from '../../services/file-system.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(
    public scannerService: ScannerDataService,
    private fileService: FileSystemService
  ) {}

  sendMail() {
    const csvFile = this.fileService.createCSV(this.scannerService.storedScans);
    this.fileService.storeAndEmailFile('scans.csv', csvFile);
  }

  openScan(scan: ScanData) {
    this.scannerService.openScan(scan);
  }
}
