# Ionic 6+

Mobile App development framework that work across multiple platforms, such as native iOS, Android and the web as a PWA - all with one code base.

## Commands

1. ### Create new project

```console
ng new < app_name >
ionic start < app_name > [ blank | tabs | sidemenu ]
```

2. ### Run Ionic App

   - #### Nodemon (live-reload) web browser
     ```console
     ionic serve
     ```
   - #### Ionic Lab
     ```console
     ionic serve --lab
     ```

3. ### Generate a new [ page | module | component | service | pipe | guard ]

```console
ionic generate [ page | module | component | service | pipe | guard ] < path >
```

## Run iOS

1. Confirm or install XCode command line tools `xcode-select --install`

2. Install Ionic iOS dependencies

   ```console
   sudo npm install -g ios-sim
   sudo npm install -g ios-deploy --unsafe-perm=true
   ```

3. Create a valid Xcode project to run natively `ionic cordova prepare ios`

4. Modify in `config.xml` file the `widget id="BUNDLE_IDENTIFIER"` value for something unique. For example `io.ionic.yourname` (all lowercase).

5. Open `<APP_NAME>.xcworkspace` file from `platforms/ios` in Xcode. Navigate to `<APP_NAME>(Targets) > Signin & Capabilitites` and include your Apple ID user in `Team` section, checking the `Automatically manage signing` and be sure that the bundle identifier modified in step 4 matches in the `Bundle Identifier` section under it.

6. Compile libraries for iOS `ionic cordova build ios`

_Note: Before running the command Xcode must no complain in the `Signin & Capabilities` section. If any error persists, run `ionic cordova platform remove ios` and try steps 3 to 5 again_

8. Run defualt Xcode emulator `ionic cordova emulate ios -l` or run by Xcode selecting device.

9. To run it in a physical device run `ionic cordova run ios`, with the iPhone connected and unlocked or simply run project from Xcode.

## App Deployment

### PWA (Firebase hosting)

1. Setup the Ionic environment as PWA
   ```console
   ng add @angular/pwa
   ionic build --prod --service-worker
   ```
2. Setup Firebase Hosting
   _Firebase options_

   ```console
   firebase init
   ```

   - What do you want to use as your public directory? `www`
   - Configure as a single-page app (rewrite all urls to /index.html)? `Yes`
   - File www/index.html already exists. Overwrite? `No`

3. Optimize production app
   _Note: In this link you can generate all sizes `src/assets/icons` for app usage`https://app-manifest.firebaseapp.com/`_

   Modify in `src/index.html` the primary color for toolbar

   ```html
   <!-- Dark Theme Color -->
   <meta name="theme-color" content="#222428" />
   <!-- Light Theme Color -->
   <meta name="theme-color" content="#f4f5f8" />
   <!-- For more references go to app/theme/variables/scss -->
   ```

   ```console
   ionic build --prod --service-worker
   ```

4. Deploy project to Firebase
   ```console
   firebase deploy
   ```

### Android (Google Play Store)

    ```console
    ionic cordova platform add android
    ```

### iOS (App Store)

    ```console
    ionic cordova platform add ios
    ```

## Ionic Components

https://ionicframework.com/docs/components

### Ionic Color Generator

https://ionicframework.com/docs/theming/color-generator

After create a new color schema, insert it or modify it in the `variables.scss` the following snnipet to override or include color variable globally,

```scss
:root {
  // Color Variables goes here
}
.ion-color-VARIABLE-NAME {
  --ion-color-base: var(--ion-color-VARIABLE-NAME) !important;
  --ion-color-base-rgb: var(--ion-color-VARIABLE-NAME-rgb) !important;
  --ion-color-contrast: var(--ion-color-VARIABLE-NAME-contrast) !important;
  --ion-color-contrast-rgb: var(
    --ion-color-VARIABLE-NAME-contrast-rgb
  ) !important;
  --ion-color-shade: var(--ion-color-VARIABLE-NAME-shade) !important;
  --ion-color-tint: var(--ion-color-VARIABLE-NAME-tint) !important;
}
```

### Ionic Grid

The grid on Ionic components its similar to the Bootstrap Grid System, dividing the entire screen into 12 possible column spaces to work with, and can be assigned for different screen sizes depending on the device orientation (landscape and portrait) or the device type (phone, tablet and laptop).

```html
<ion-grid fixed>
  <ion-row>
    <ion-col size-sm="" size-md="" size-lg="" size-xl=""></ion-col>
  </ion-row>
</ion-grid>
```

_Responsive column sizes_

```html
<!-- Small Devices -->
<ion-col size-sm="1-12"></ion-col>
<!-- Small Devices -->
<ion-col size-md="1-12"></ion-col>
<!-- Small Devices -->
<ion-col size-lg="1-12"></ion-col>
<!-- Small Devices -->
<ion-col size-xl="1-12"></ion-col>
```

### Action Sheet

https://ionicframework.com/docs/api/action-sheet

Dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app.

`action-sheet.component.html`

```html
<ion-button (click)="showActionSheet()" expand="block">
  Show Action Sheet
</ion-button>
```

`action-sheet.component.ts`

```typescript
    import { ActionSheetController } from '@ionic/angular';
    // ...
    constructor(private actionSheetCtlr: ActionSheetController) {}
    // ...
    async showActionSheet() {
        const actionSheet = await this.actionSheetCtlr.create({
          header: '<TITLE>',
          buttons: [
            {
              text: '<BUTTON_TEXT>',
              role?: ['destructive'|'cancel'| null ],
              icon: '<ION_ICON_NAME>',
              handler: () => {
                // TO DO when option is clicked
              },
            },
            // ... More buttons goes here
         ],
        });
        await actionSheet.present();
    }

```

### Alert

https://ionicframework.com/docs/api/alert

Dialog that presents users with information or collects information from the user using inputs.
`alert.component.html`

```html
<ion-button (click)="showAlert()" expand="block">
  Show Alert
</ion-button>
```

`alert.component.ts`

```typescript
async showAlert() {
    const alert = await this.alertCtrl.create({
      header: '<TITLE>',
      inputs?: [
        {
          name: 'myInput',
          type: '<INPUT_TYPE>'
        },
         // ... More inputs goes here
      ],
      buttons: [
        {
          text: '<BUTTON_TEXT>',
          role?: ['destructive'|'cancel'| null ],
          icon: '<ION_ICON_NAME>',
          handler: (data) => {
            // Here is obtained the data from inputs as key/value format { input-name: value }
            // ex. data.myInput = 'whatever user typed...'
          },
        },
         // ... More buttons goes here
      ],
    });

    await alert.present();
  }
```

### Avatar

https://ionicframework.com/docs/api/avatar

Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.

### Button

https://ionicframework.com/docs/api/button

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both.

### Card

https://ionicframework.com/docs/api/card

Cards are a standard piece of UI that serves as an entry point to more detailed information. A card can be a single component, but is often made up of some header, title, subtitle, and content.

### Checkbox

https://ionicframework.com/docs/api/checkbox

Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will toggle the checked property. They can also be checked programmatically by setting the checked property.

### Datetime Picker

https://ionicframework.com/docs/api/datetime

Datetimes present a picker interface from the bottom of a page, making it easy for users to select dates and times. The picker displays scrollable columns that can be used to individually select years, months, days, hours and minute values.

`datetime.component.html`

```html
<ion-item>
  <ion-label>'...'</ion-label>
  <ion-datetime
    displayFormat="<DATE_FORMAT>"
    placeholder="..."
    [value?]="<DEFAULT_VALUE>"
    [(ngModel)]="<DATETIME_VARIABLE>"
    (ionChange)="getSelectedDate($event)"
    monthNames?="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"
    min?="<MIN-VALUE-IN-FORMAT>"
    max?="<MAX-VALUE-IN-FORMAT>"
  >
    ></ion-datetime
  >
</ion-item>
```

`datetime.component.ts`

```typescript
  getSelectedDate( event ){
    const date = new Date( event.detail.value );
  }
```

###### Date Formats

- Day `DD`
- Month `MM | MMMM`
- Year `YY | YYYY`
- Hour `HH`
- Minute `mm`
- Seconds `ss`

### Infinite Scroll

https://ionicframework.com/docs/api/infinite-scroll

The Infinite Scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page.

`infinite-scroll.component.html`

```html
<ion-list>
  <ion-item *ngFor="let item of data; let i = index">
    <ion-label> Item {{ i + 1 }} </ion-label>
  </ion-item>
</ion-list>

<ion-infinite-scroll threshold="25%" (ionInfinite)="loadData($event)">
  <ion-infinite-scroll-content
    loadingSpinner="[dots|crescent|bubbles]"
    loadingText?="..."
  >
  </ion-infinite-scroll-content>
</ion-infinite-scroll>
```

`infinite-scroll.component.ts`

```typescript
  import { Component, ViewChild } from '@angular/core';
  import { IonInfiniteScroll } from '@ionic/angular';
  // ...
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);

  loadData(event) {
    console.log('Loading 20 more registers....');

    setTimeout(() => {
      if (this.data.length > 50) {
        // If the data contains more than 50 registers, the infinite scroll is disabled
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      // While the data contains less than 50 registers, will be added 20 more to list
      // and the infinite scroll loading will appear for 1 second (simulating an async request)
      const moreItems = Array(20);
      this.data.push(...moreItems);
      event.target.complete();
    }, 1000);
  }
```

### Input

https://ionicframework.com/docs/api/input

It is meant for text type inputs only, such as "text", "password", "email", "number", "search", "tel", and "url". It supports all standard text input events including keyup, keydown, keypress, and more.

### Item Sliding

https://ionicframework.com/docs/api/item-sliding

A sliding item contains an item that can be dragged to reveal buttons. It requires an item component as a child. All options to reveal should be placed in the item options element.

### List

https://ionicframework.com/docs/api/list

Lists are made up of multiple rows of items which can contain text, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.

### Loading

https://ionicframework.com/docs/api/loading

An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting showBackdrop: false upon creation.

```typescript
  import { LoadingController } from '@ionic/angular';
  // ...
  loading: any;
  constructor(public loadingController: LoadingController) {}

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
```

### Menu

Note: The menu must be created as a `component` not a page in order to be overlaping another pages when its toggle.

`menu.component.ts`

```html
<ion-menu side="start" menuId="menuId" contentId="main">
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
      <!-- More menu items goes in here -->
    </ion-list>
  </ion-content>
</ion-menu>
```

`app.component.html`

```html
<!-- menu.component.html -->
<app-menu> </app-menu>
<!-- This is the primary router outlet referenced by the contentId property in menu -->
<ion-router-outlet id="main"></ion-router-outlet>
```

`home.component.html`

```html
<!-- This element is created as a button in the toolbar to open/close the menu -->
<ion-buttons slot="start">
  <ion-menu-button menu="menuId"></ion-menu-button>
</ion-buttons>
```

### Modal

https://ionicframework.com/docs/api/modal

A modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.

Note: 2 components are required for modals to work properly, once activates the modal (modal-presenter) and another one is the view as is (modal)

`modal-presenter.module.ts`

```typescript
// ...
entryComponents: [ModalPage],
  imports: [
    // ...
    ModalPageModule
  ],
  // ...
```

`modal-presenter.component.ts`

```typescript
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../<PATH_TO_MODAL_COMPONENT>';

constructor(public modalController: ModalController) {}

  async showModal() {
    const modal = await this.modalController.create({
      component: ModalPage, // Page or component to display as modal
      componentProps: {
        // Here we send all the data to the modal once we present it
        object: {}
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data); // Here is the data returned by the modal
  }
```

`modal.component.ts`

```typescript
  import { ModalController } from '@ionic/angular';
  // Here the data from presenter is received
  @Input() object: string;
  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    // Close without sending data
    this.modalCtrl.dismiss();
  }

  sendModal() {
    // Sends data to the presenter component
    this.modalCtrl.dismiss({ data: 'info to modal-presenter' });
  }
```

### Popover

Note: Similar to modals, the popover components requires 2 components to work properly, one activates the popover (popover-presenter) and another one is the view as is (popover)

`popover-presenter.module.ts`

```typescript
// ...
entryComponents: [PopoverPage],
  imports: [
    // ...
    PopoverPageModule
  ],
  // ...
```

`popover-presenter.component.ts`

```typescript
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../<PATH_TO_POPOVER_COMPONENT>';

constructor(public popoverController: PopoverController) {}

  async showPopover(event: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoPage, // Page or component to display as popover
      event: event,
      mode: 'ios', // The iOS UI is more UX friendly
      backdropDismiss: false // Allow user click outside or not to close popover
    });
    await popover.present();
    const { data } = await popover.onWillDismiss(); // Here is the data returned by the popover
    console.log(data);
  }
```

`modal.component.ts`

```typescript
import { PopoverController } from '@ionic/angular';
// ...
private popoverCtrl: PopoverController
// ...
closePopover( {
    // Close without sending data
    this.popoverCtrl.dismiss();
}
closePopover() {
    // Sends data to the presenter component
    this.popoverCtrl.dismiss({ data: 'info to popover-presenter' });
}
```

### Progress Bar & Range

https://ionicframework.com/docs/api/range

https://ionicframework.com/docs/api/progress-bar

```html
<ion-list>
  <ion-item>
    <!-- Range sliding bar -->
    <ion-range
      [value]="range"
      color="danger"
      mode="md"
      pin="true"
      (ionChange)="OnRangeChange($event)"
    >
      <ion-label slot="start">0</ion-label>
      <ion-label slot="end">100</ion-label>
    </ion-range>
  </ion-item>
  <ion-item>
    <!-- Progress bar; The balue is a percentage between 0 and 1 (n/100) -->
    <ion-progress-bar color="danger" [value]="range/100"></ion-progress-bar>
  </ion-item>
</ion-list>
```

```typescript
  range = '10';
  // ...
  OnRangeChange(event) {
    this.range = event.detail.value;
  }
```

### Reorder Group

https://ionicframework.com/docs/api/reorder-group

The reorder group is a wrapper component for items using the ion-reorder component.

`reorder-group.component.html`

```html
<ion-list>
  <ion-reorder-group disabled="false" (ionItemReorder)="doReorder($event)">
    <ion-item *ngFor="let item of heroes">
      <ion-label>{{item}}</ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
  </ion-reorder-group>
</ion-list>
```

`reorder-group.component.ts`

```typescript
  doReorder(ev: any) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    const tmp = array[ev.detail.from];
    array[ev.detail.from] = array[ev.detail.to];
    array[ev.detail.to] = tmp;
    ev.detail.complete();
  }
```

### Refresher

https://ionicframework.com/docs/api/refresher

The refresher provides pull-to-refresh functionality on a content component. The pull-to-refresh pattern lets a user pull down on a list of data using touch in order to retrieve more data.

```html
<ion-content>
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
  <!-- Data when 'doRefresh()' ends -->
</ion-content>
```

```typescript
doRefresh(event) {
  // Simulates an async operation to retreive data delaying 2 seconds to show refresher
    setTimeout(() => {
      // Here goes operations when refresh is completed
      event.target.complete();
    }, 2000);
  }
```

### Search Bar

https://ionicframework.com/docs/api/searchbar

The Search Bar works as a simple input text with fast response while the user types. It's used along a `filter.pipe` to increase the data performance on data structures searching.

`filter.pipe.ts`

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // The pipe receives the array, the search term and the attribute in every item in array to
  // compare and do the searching with it.
  transform(arr: any[], searchTerm: string, attribute: string): any[] {
    if (searchTerm === '') {
      return arr;
    }

    searchTerm = searchTerm.toLowerCase();

    return arr.filter(item => {
      return item[attribute].toLowerCase().includes(searchTerm);
    });
  }
}
```

`search.component.html`

```html
<ion-searchbar
  placeholder="Type something to search..."
  inputmode="text"
  type="text"
  (ionChange)="onSearchChange($event)"
></ion-searchbar>

<ion-list>
  <!-- Here the filter.pipe.ts it's used to present the data that matches the searching -->
  <ion-item *ngFor="let item of data | filter:term:'<ATTRIBUTE>'">
    <ion-label>{{ item.ATTRIBUTE }}</ion-label>
  </ion-item>
</ion-list>
```

`search.component.ts`

```typescript
  // Variable to store user search term
  term: string = '';

  onSearchChange(event) {
    const searchTerm: string = event.detail.value;
    if (searchTerm.length == 0) {
      return;
    } else {
      this.term = searchTerm;
    }
  }
```

### Segment

https://ionicframework.com/docs/api/segment

Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.

Note: Can be used along with the `filter.pipe.ts` like the `search.component.html` use it, to filter data when toggle between segment buttons and present the data.

`segment.component.html`

```html
<ion-segment (ionChange)="segmentChanged($event)" value="DEFAULT_VALUE">
  <ion-segment-button value="VALUE_1">
    <ion-label>...</ion-label>
  </ion-segment-button>
  <ion-segment-button value="VALUE_2">
    <ion-label>...</ion-label>
  </ion-segment-button>
  <!-- More segment options goes here -->
</ion-segment>
```

`segment.component.ts`

```typescript
// ...
segmentChanged(event) {
  // Here we will receive 'VALUE_1', 'VALUE_2', ...
    const segmentSelected = event.detail.value;
  }
```

### Skeleton Text

https://ionicframework.com/docs/api/skeleton-text

Fills the data with a smooth animation while it loads. The element will render a gray block at the specified width.

`skeleton.component.html`

```html
<ion-thumbnail slot="start">
  <ion-skeleton-text animated></ion-skeleton-text>
</ion-thumbnail>
<ion-label>
  <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
</ion-label>
```

### Slides

https://ionicframework.com/docs/api/slides

The Slides component is a multi-section container. Each section can be swiped or dragged between. It contains any number of Slide components.

`slide.component.html`

```html
<ion-content fullscreen class="ion-padding" scroll-y="false">
  <ion-slides mode="ios" pager="ios">
    <ion-slide>
      <div class="slide">
        <img src="../../../assets/slide-1.png" />
        <h2>Welcome</h2>
        <p>
          The <b>ionic conference app</b> is a practical preview of the ionic
          framework in action, and a demonstration of proper code use.
        </p>
      </div>
    </ion-slide>

    <ion-slide>
      <img src="../../../assets/slide-2.png" />
      <h2>What is Ionic?</h2>
      <p>
        <b>Ionic Framework</b> is an open source SDK that enables developers to
        build high quality mobile apps with web technologies like HTML, CSS, and
        JavaScript.
      </p>
    </ion-slide>

    <ion-slide>
      <img src="../../../assets/slide-3.png" />
      <h2>What is Ionic Appflow?</h2>
      <p>
        <b>Ionic Appflow</b> is a powerful set of services and features built on
        top of Ionic Framework that brings a totally new level of app
        development agility to mobile dev teams.
      </p>
    </ion-slide>

    <ion-slide>
      <img src="../../../assets/slide-4.png" />
      <h2>Ready to Play?</h2>
      <ion-button fill="clear"
        >Continue <ion-icon slot="end" name="arrow-forward"></ion-icon
      ></ion-button>
    </ion-slide>
  </ion-slides>
</ion-content>
```

`slide.component.scss`

```scss
ion-slides {
  height: 100%;
}

.swiper-slide {
  display: block;
}

.swiper-slide h2 {
  margin-top: 2.8rem;
}

.swiper-slide img {
  max-height: 50%;
  max-width: 80%;
  margin: 60px 0 40px;
  pointer-events: none;
}

b {
  font-weight: 500;
}

p {
  padding: 0 40px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ion-color-step-600, #60646b);
}

p b {
  color: var(--ion-text-color, #000000);
}
```

### Split-Pane

https://ionicframework.com/docs/api/split-pane

If the device's screen width is below a certain size, the split pane will collapse and the menu will be hidden. This is ideal for creating an app that will be served in a browser and deployed through the app store to phones and tablets.

`app.component.html`

```html
<ion-split-pane contentId="main" when="md">
    <!--  Side menu  -->
    <ion-menu side="start" menuId="menuId" contentId="main">
    </ion-menu>
    <!-- Main content -->
    <ion-router-outlet id="main"></ion-router-outlet>
  </ion-split-pane>
</ion-app>
```

### Tabs

https://ionicframework.com/docs/api/tabs

Tabs are a top level navigation component to implement a tab-based navigation.

`tabs.component.html`

```html
<ion-tabs>
  <ion-tab-bar slot="bottom|top" mode="md">

    <ion-tab-button tab="tab1">
      <ion-icon name="..."></ion-icon>
      <ion-label>...</ion-label>
    </ion-tab-button>
    <!-- More tabs goes here -->

</ion-tabs>
```

`tabs-routing.component.ts`

```typescript
const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab1' // This is the default route to navigate
  },
  {
    path: '',
    component: TabsPage,
    children: [
      // We declare what each tab will present in the children routes
      {
        path: 'tab1',
        loadChildren:
          '../component-page/component-page.module#ComponentPageModule'
      }
      // More routes for tabs goes here
    ]
  }
];
```

### Toast

https://ionicframework.com/docs/api/toast

A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.

`toast.component.ts`

```typescript
import { ToastController } from '@ionic/angular';
// ...
constructor(private toastCtrl: ToastController) {}
// ...
async showToast() {
    const toast = await this.toastCtrl.create({
      message: 'This is a toast message!',
      duration: 2000,
      color: 'primary',
      mode: 'ios'
    });
    toast.present();
  }
```

## Ionic Plug-ins (Use device native functions)

### In App Browser

The In App Browser plug-in allow the Ionic app to open a new tab on the predefined device browser using an specific url.

```console
ionic cordova plugin add cordova-plugin-inappbrowser
npm install @ionic-native/in-app-browser
```

`app.module.ts`

```typescript
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// ...
providers: [
  // ...
  InAppBrowser
];
```

`in-app-browser.component.ts`

```typescript
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// ...
constructor(private iab: InAppBrowser) { }
// ...
const browser = this.iab.create('https://your_url.com');
```

### Social Sharing

Includes social sharing methods for a variety of social media to share links, files, send SMS, emails and messages.

```console
ionic cordova plugin add cordova-plugin-x-socialsharing
npm install @ionic-native/social-sharing
```

`app.module.ts`

```typescript
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// ...
providers: [
  // ...
  SocialSharing
];
```

`social-sharing.component.ts`

```typescript
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// ...
constructor(private socialSharing: SocialSharing) { }
// ...

// Social media sharing method (The user decides which social network use)
this.socialSharing.share(
  // BODY MESSAGE, SUBJECT, FILE?, URL?
)
.then(() => {
  // Success!
}).catch(() => {
  // Error!
});
```

### Ionic Storage

Stores locally in the device data for iOS / Android / Browser devices.

```console
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage
```

`app.module.ts`

```typescript
import { IonicStorageModule } from '@ionic/storage';
// ...
imports: [
  // ...
  IonicStorageModule.forRoot()
];
```

`data-storage.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  public dataArr: DataType[] = [];

  constructor(private storage: Storage) {}

  storeData( item2Store: DataType) {
    const exists = this.dataArr.find(
      inStorage => inStorage.<ATRIBUTE_TO_COMPARE> ===  item2Store.<ATRIBUTE_TO_COMPARE>
    );
    if (!exists) {
      this.dataArr.unshift( item2Store);
      this.storage.set('<KEY>', this.dataArr);
    }
  }

  async loadStorage() {
    const dataInStorage = await this.storage.get('<KEY>');
    if (dataInStorage) {
      this.dataArr = dataInStorage;
    } else {
      this.dataArr = [];
    }
  }

  removeFromStorage(item2Remove: Article) {
    this.dataArr = this.dataArr.filter(
      inStorage => inStorage.<ATRIBUTE_TO_COMPARE> !== item2Remove.<ATRIBUTE_TO_COMPARE>
    );
    this.storage.set('<KEY>', this.dataArr);
  }
}
```

### Barcode Scanner (QR & Barcode)

Uses camera to scan codes, and reads both types. QR & Barcode codes.

_IMPORTANT: For iOS setup in the `config.xml` inside of the `<platform name='ios>` section add the following lines to enable the iOS devices use the camera functions in order to work properly_

`config.xml`

```xml
<!-- Here goes more configurations in `config.xml` -->
<platform name="ios">
  <config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
   <string>You can take photos</string>
  </config-file>
  <!-- More things goes here -->
</platform>
```

```console
ionic cordova plugin add phonegap-plugin-barcodescanner
npm install @ionic-native/barcode-scanner
```

`app.module.ts`

```typescript
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// ...
providers: [
  // ...
  BarcodeScanner
];
```

`scan-data.model.ts`

_`ScanData` controls the type of scan received from camera QR or Barcode_

```typescript
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
```

`scan.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { ScanData } from '../models/scan-data';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  storedScans: ScanData[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {
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
    switch (scan.type) {
      case `web site`:
        // WEB SITES IMPLEMENTATION
        break;
      case `map`:
        const coordinates = scan.text.substr(4, scan.text.length).split(',');
        const latitude = coordinates[0];
        const longitude = coordinates[1];
        // MAPS IMPLEMENTATION
        break;
      case `OTHER_SCAN_TYPE`:
        // HERE GOES MORE IMPLEMENTATION FOR MORE SCAN TYPES
        break;
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
```

`scan-reader.component.ts`

```typescript
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ScanService } from '../../services/scan.service';
// ...
export class ScanReader {
  constructor(
    private barcodeScanner: BarcodeScanner,
    private scanService: ScanService
  ) {}

  // Launch camera with scanner
  launchScanner() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        if (!barcodeData.cancelled) {
          this.scanService.storeScan(barcodeData.format, barcodeData.text);
        }
      })
      .catch(err => {
        console.log('ERROR: Couldn`t recognize code');
      });
  }
}
```

### File

https://ionicframework.com/docs/native/file

This plugin implements a File API allowing read/write access to files residing on the device.

```console
ionic cordova plugin add cordova-plugin-file
npm install @ionic-native/file
```

`app.module.ts`

```typescript
import { File } from '@ionic-native/file/ngx';
// ...
providers: [
  // ...
  File
];
```

`file-system.service.ts`

```typescript
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class FileSystemService {
  constructor(private file: File, private emailService: EmailComposerService) {}

  storeFile(fileName: string, fileContent: string) {
    this.file
      .checkFile(this.file.dataDirectory, fileName)
      .then(() => {
        this._writeOnFile(fileName, fileContent);
        // HERE GOES ALL ACTIONS WHEN WE HAVE THE FILE PATH
      })
      .catch(() => {
        this.file
          .createFile(this.file.dataDirectory, fileName, false)
          .then(() => {
            this._writeOnFile(fileName, fileContent);
            // HERE GOES ALL ACTIONS WHEN WE HAVE THE FILE PATH
          })
          .catch(() => {
            console.log('ERROR: File couldn`t be created');
          });
      });
  }

  // Auxiliary function to write/overrite files in system
  private async _writeOnFile(fileName: string, fileContent: string) {
    await this.file.writeExistingFile(
      this.file.dataDirectory,
      fileName,
      fileContent
    );
  }

  // --------------------------------------------------------------------------
  // FILE CONVERSION
  // --------------------------------------------------------------------------
  createCSV(csvData: ObjectType[]) {
    const tmpArr = [];
    const csvTitles = 'COLUMN 1,COLUMN 2,...\n';
    tmpArr.push(csvTitles);
    csvData.forEach(scan => {
      const register = `${csvData.ATTRIBUTE_1},${csvData.ATTRIBUTE_2},...\n`;
      tmpArr.push(register);
    });
    return tmpArr.join('');
  }
}
```

### Email Composer

https://ionicframework.com/docs/native/email-composer

Simply email sending plugin. Prepares the email skeleton (to, cc, attatchments, subject, email body) and the sends it to an SMTP mail server.

```console
ionic cordova plugin add cordova-plugin-email-composer
npm install @ionic-native/email-composer
```

`app.module.ts`

```typescript
import { EmailComposer } from '@ionic-native/email-composer/ngx';
// ...
providers: [
  // ...
  EmailComposer
];
```

`email-composer.service.ts`

```typescript
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
```
