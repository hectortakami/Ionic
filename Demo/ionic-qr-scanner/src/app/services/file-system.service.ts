import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { ScanData } from '../models/scan-data';
import { EmailComposerService } from './email-composer.service';

@Injectable({
  providedIn: 'root'
})
export class FileSystemService {
  constructor(private file: File, private emailService: EmailComposerService) {}

  storeAndEmailFile(fileName: string, fileContent: string) {
    this.file
      .checkFile(this.file.dataDirectory, fileName)
      .then(() => {
        this._writeOnFile(fileName, fileContent);
        // HERE GOES ALL ACTIONS WHEN WE HAVE THE FILE PATH
        this.callEmailComposer(`${this.file.dataDirectory}${fileName}`);
      })
      .catch(() => {
        this.file
          .createFile(this.file.dataDirectory, fileName, false)
          .then(() => {
            this._writeOnFile(fileName, fileContent);
            // HERE GOES ALL ACTIONS WHEN WE HAVE THE FILE PATH
            this.callEmailComposer(`${this.file.dataDirectory}${fileName}`);
          })
          .catch(() => {
            console.log('ERROR: File couldn`t be created');
          });
      });
  }

  private async _writeOnFile(fileName: string, fileContent: string) {
    await this.file.writeExistingFile(
      this.file.dataDirectory,
      fileName,
      fileContent
    );
  }

  // -------------------------------------------------------------------------------
  // FILE CONVERSION
  // -------------------------------------------------------------------------------
  createCSV(csvData: ScanData[]) {
    const tmpArr = [];
    const csvTitles = 'Type,Scan Format,Created Date,Content\n';
    tmpArr.push(csvTitles);
    csvData.forEach(scan => {
      const register = `${scan.type},${scan.format},${
        scan.created
      },${scan.text.replace(/,|\s+/g, ' ')}\n`;
      tmpArr.push(register);
    });
    return tmpArr.join('');
  }

  // -------------------------------------------------------------------------------
  // EMAIL COMPOSER SERVICE
  // -------------------------------------------------------------------------------
  callEmailComposer(filePath: string) {
    this.emailService.sendMail(
      ['hectak97.HT@gmail.com'],
      'Ionic QR Backup',
      'Hi there! This is a trial email generated with <strong>Email Composer</strong> plugin.',
      [filePath]
    );
  }
}
