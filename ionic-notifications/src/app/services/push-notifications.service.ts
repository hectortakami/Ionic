import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {
  constructor(private oneSignal: OneSignal) {}

  initializeConfiguration() {
    this.oneSignal.startInit(
      'db1ce478-04c3-447c-a366-abad474b3928', // One Signal App ID
      '840854245451' // Firebase Cloud Messaging (Sender ID)
    );

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.InAppAlert
    );

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
  }
}
