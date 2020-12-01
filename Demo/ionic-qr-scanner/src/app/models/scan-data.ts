export class ScanData {
  public format: string;
  public text: string;
  public type: string;
  public icon: string;
  public created: Date;

  constructor(format: string, text: string) {
    this.format = format;
    this.text = text;
    this.created = new Date();
    this.getScannerType();
  }

  private getScannerType() {
    const startingText = this.text.substr(0, 4);

    switch (startingText) {
      case `http`:
        this.type = 'web site';
        this.icon = 'globe';
        break;
      case `geo:`:
        this.type = 'map';
        this.icon = 'compass';
        break;
      case `BEGI`:
        if (this.text.startsWith('BEGIN:VEVENT')) {
          this.type = 'event';
          this.icon = 'calendar';
          break;
        }
        if (this.text.startsWith('BEGIN:VCARD')) {
          this.type = 'vcard';
          this.icon = 'person-circle';
          break;
        }

      case `MATM`:
        this.type = 'email';
        this.icon = 'mail';
        break;

      default:
        this.type = 'text';
        this.icon = 'text';
        break;
    }
  }
}
