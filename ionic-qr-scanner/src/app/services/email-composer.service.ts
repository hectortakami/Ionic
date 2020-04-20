import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable({
  providedIn: 'root'
})
export class EmailComposerService {
  constructor(private emailComposer: EmailComposer) {}

  sendMail(
    to: string[],
    subject: string,
    body: string,
    attatchments?: string[],
    cc?: string[],
    bcc?: string[],
    isHtml: boolean = true
  ) {
    let email = {
      to: to, // Who will receive the mail
      cc: cc, // Copied emails to the mail
      bcc: bcc, // This persons will recieve the mail, but will not be notified (background copy)
      // Here goes all the file references to attatch in mail from file system
      // Ex. 'file://img/logo.png','file://README.pdf'
      attachments: attatchments,
      subject: subject,
      body: body,
      isHtml: isHtml // Allow to use HTML code to format email body
    };
    // Opens device mail service with the mail set to send
    this.emailComposer.open(email);
  }
}
