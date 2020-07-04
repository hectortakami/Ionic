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

## Device Development (Android & iOS)

### Run Android

1. Setup JDK 8 https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html `java -version` must be `1.8.0_*`

2. Install the Gradle `brew install gradle`, `gradle -v` must be `Gradle 6.5` or higher.

3. Install Android Studio & optionally prepare an Emulator in `Tools > AVD Manager` (but not recommended for RAM usage)

4. Run command `ionic cordova prepare android`

5. Run command `ionic cordova build android`

6. Open the generated android folder located in `platforms/android` with the Android Studio editor and wait until Android Studio processes finish entirely after opening it.

_Note: In case of prompt message `Android Gradle Plugin Update` after open Android Studio project, 1) Decline by `Don't remind me again in this project` or 2) Accept updating the Gradle ( or will be running automatically in the processes below) and run `ionic cordova platform remove android`, then run `brew upgrade gradle` and repeat from step 5._

7. To run app in Android Device must be in Developer mode (Tap 7 times the build number), enable `USB Debugging`, run the command `ionic cordova run --list` to validate the physical device connection and run command `ionic cordova run android` (add `-l` flag to enable live reload)

### Run iOS

1. Confirm or install XCode command line tools `xcode-select --install`

2. Install Ionic iOS dependencies

   ```console
   sudo npm install -g ios-sim
   sudo npm install -g ios-deploy --unsafe-perm=true
   ```

4) Modify in `config.xml` file the `widget id="BUNDLE_IDENTIFIER"` value for something unique. For example `io.ionic.yourname` (all lowercase).

5) Open `<APP_NAME>.xcworkspace` file from `platforms/ios` in Xcode. Navigate to `<APP_NAME>(Targets) > Signin & Capabilitites` and include your Apple ID user in `Team` section, checking the `Automatically manage signing` and be sure that the bundle identifier modified in step 4 matches in the `Bundle Identifier` section under it.

6) Compile libraries for iOS `ionic cordova build ios`

_Note: Before running the command Xcode must no complain in the `Signin & Capabilities` section. If any error persists, run `ionic cordova platform remove ios` and try steps 3 to 5 again_

8. Run defualt Xcode emulator `ionic cordova emulate ios -l` or run by Xcode selecting device.

9. To run it in a physical device run `ionic cordova run ios`, with the iPhone connected and unlocked or simply run project from Xcode.

## App Deployment

### Icon & Splash Screen

1. `npm install -g cordova-res --unsafe-perm=true --allow=root`

2. Run `ionic cordova platform add ios` or `ionic cordova platform add android` to generate the `resources` folder in your Ionic project, then the default `icon.png`, `splash.png` will be generated.

3. Replace each file in the `resources` folder ensuring they both have _The same <name>.png extension_ and _The same size resolution_ (`icon.png`, `1024 x 1024 px`), (`splash.png`, `2732 x 2732 px`)

4. Run command `ionic cordova resources --force` _In case of error `npm remove -g cordova-res` and repeat step 1_

### Bundle ID & App Name

1. Open `config.xml` file and set the next values

   - `<widget id="BUNDLE_IDENTIFIER" version="1.0.0" ...` _The Bundle ID will be set one time to identify the app, must be set as an inverse URL form like 'com.site.appname' with no dashes, spaces or special characters_
   - `<name> YOUR_APP_NAME </name>`
   - `<description> YOUR_APP_DESCRIPTION </description>`
   - `<author email="EMAIL" href="URL">AUTHOR_NAME</author>`

### Platform Deployment

#### PWA (Firebase hosting)

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

#### Android (Google Play Store)

You must have a Google Play Developer Account https://play.google.com/apps/publish and pay \$25 USD (once payment only), a `512 x 512 px icon`, a `1024 x 500 px banner` and a maximun of 8 screenshots `1242 x 2208 px aprox` for Play Store publishing.

##### Sign the APK

1. Build project and generate the `app-release-unsigned.apk` with the command `ionic cordova build android --prod --release`
   _Recommended: Before uploading to Google Play Store, open the Android Studio generated project (don't update Gradle and wait until processes finish) and test the app in a mobile device. Also you can only type `ionic cordova run android`_

2. Open the Android Studio project generated under `platforms/android` (wait until the processes finish & DON'T UPDATE GRADLE PLUGIN if the message prompts) and navigate to `Build > Generate Signed Bundle or APK > APK > Create new`

3. In `Key store path` select a folder where the SHA key will be generated and encrypted with 2 passwords (one for the Key and other for the Key Store Path) _STORE THE PASSWORDS! They will be asked when updating the app to newer versions_

4. Click next and select `Release` and `V1(JAR Signature)`, click finish and wait until the process is done. The signed APK will be located in the `platforms/android/app/release/app-release.apk` folder.

5. You can move the `app-release.apk` file generated & rename it to keep it close to upload it to the store.

##### Upload to Google Play Store

1. Login to your Google Play Console and click on `My Applications > Add new app` to fill out all the register forms. Add the `512 x 512 px icon`, a `1024 x 500 px banner` and a maximun of 8 screenshots `1242 x 2208 px aprox` at least.

2. Select the app version `Alfa, Beta or Production`, allow Google to manage your signed app key and upload the `Signed APK` generated with the file `app-release.apk` from previous section (can be named differently doesn´t matter). Click Save and Review. _Note: Don't mind if an error or warning occurs (while the green arrow checks the versioning step), continue the step 3._

3. Select the app clasification, full-fill the form and calculate the clasification. _Note: Each updating version this will be required_

4. Select the app pricing, allowed contries and setup all the rest of fields in application content needed.

5. return to the app versioning control to setup the `Testers List`. Your app will be publish after 24hrs verification.

#### iOS (App Store)

1. Edit `config.xml` adding the following line `<preference name = "WKWebViewOnly" value = "true" />`

2. Run commands `ionic cordova plugin rm cordova-plugin-ionic-webview` , `ionic cordova plugin add cordova-plugin-ionic-webview@latest` and `npm install @ionic-native/ionic-webview@latest`

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
<ion-slides [options]="slidesOpts" #slidesID>
  <ion-slide>
    <!-- All HTML content in slide goes here -->
  </ion-slide>
</ion-slides>
```

`slide.component.ts`

```typescript
// Enable more slides per view (not only 1 by 1) as carroussell
slidesOpts = {
    slidesPerView: 3.5
  };


// Lock & Move manually
import { IonSlides } from '@ionic/angular';
// ...
@ViewChild('slidesID', { static: true }) mySlides: IonSlides;

constructor() {
  // Disables the possibility to touch and swipe
    this.mySlides.lockSwipes(true);
  }

moveSlidesManually(slide: number) {
    this.mySlides.lockSwipes(false);  // Slides must be unlock first
    this.mySlides.slideTo(slide);     // Slides are ordered as an array [0...n]
    this.mySlides.lockSwipes(true);   // Re-lock slides
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

### Authentication

#### Google Auth Plugin

_Make sure the `config.xml` file has already set an ID `<widget id="com.katana.yourproject"...`_

1. Generate a SHA-1 Key:
   1. Run `ionic cordova build android`
   2. Create a new folder named `AndroidKeys` in the `Ionic ROOT PROJECT` to store all the references to the following steps.
   3. Open the generated Android Studio project from `platforms/android` _wait until processes finish_ and navigate to `Build > Generate Signed Bundle > APK > Key store path > Create New > <your_path_to_AndroidKeys>` and name the file as `masterkey`
   4. Fill out the fields
      - `Key store path` _with the path to the `AndroidKeys` folder from previous step_
      - `Alias` as `masterkey`
      - `Country code (XX)` as `mx`
      - And set the 4 times verification of password _`android` lowecased suggested_
      - Ignore the message warning _'Key was created with errors'_ and close the Android Studio project _The file `masterkey.jks` must be created in `AndroidKeys` folder_
   5. Run the command `keytool -exportcert -list -v -alias masterkey -keystore your_path_to_project/AndroidKeys/masterkey` and enter the password set in the step 4.
   6. Copy the genrated `SHA1` key _29:B9:A7:3A:E5:B1:32:18:AB:61:42:7F:9D:5C:3A:C8:63:AC:C4:A1_
2. In Firebase console enable `Sigin Method > Google` and `Add a new Android App` to the current project using the same `<widget id...` set from the `config.xml` file as Package Name and the generated `SHA1` key to `Register the app`, _You can skip all the rest of configurations recomended by Firebase, in the project settings the SHA1 and Bundle ID for Android must be set up_
3. In Firebase console `Add a new iOS App` to the current project using the same `<widget id...` set from the `config.xml` file as Package Name, click next and downdload the `GoogleService-Info.plist` file. _Optionally: Create new folder named `iOSKeys` in the `Ionic ROOT PROJECT` to store the files._
4. Retreive `WEB_APPLICATION_CLIENT_ID` and `REVERSED_CLIENT_ID`:
   - Navigate to Google Cloud Platform https://console.cloud.google.com/ `your_firebase_project > APIs and Services > Credentials > Web client (auto created by Google Service)` and copy the `Client ID` key. _This will be the `WEB_APPLICATION_CLIENT_ID`_
     \_ Open the `GoogleService-Info.plist` file to retreive your `REVERSED_CLIENT_ID`
5. Install the Google Plus Plugin `ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=myreversedclientid --variable WEB_APPLICATION_CLIENT_ID=mywebapplicationclientid` and `npm install @ionic-native/google-plus`

6. Define plugin usage + Angular Fire

`app.module.ts`

```ts
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// ...
  providers: [
    GooglePlus,
  // ...
```

`fire-auth.service.ts`

```typescript
  async nativeGoogleLogin() {
    try {
      const googleUser = await this.google.login({});
      const response = await this.fireAuth.signInWithCredential(
        auth.GoogleAuthProvider.credential(null, googleUser.accessToken)
      );
      const user: User = {
        uid: response.user.uid,
        email: response.user.email,
        displayName: response.user.displayName,
        photoURL: response.user.photoURL,
        phoneNumber: response.user.phoneNumber,
        address: null,
        role: null,
        whatsapp: null
      };
      return this.updateUserData(user);
    } catch (err) {
      this.presentAlert('Facebook Err', err);
    }
  }
```

7. Test Android

   - Run command `ionic cordova build android --release` to generate an release APK
   - Sign the key `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore your_path_to_project/AndroidKeys/masterkey path_to_generated_release/app-release-unsigned.apk masterkey` _Enter the password from step 1.4_
   - Run `brew cask install android-platform-tools`, then `adb install path_to_generated_release/app-release-unsigned.apk` _In case of error: Uninstall previous version of app, unlock the device and allow USB debugging_ and when finished unistall package with `brew cask uninstall android-platform-tools` in order for Ionic to keep working properly
     _Note: The Google Login only works with signed APKs, so from now on to test in device you must follow this steps to test and deploy the app. REMEMBER TO RUN `brew cask uninstall android-platform-tools` after testing Google login on Android device_

8. Test iOS

   - Run command `ionic cordova build ios`
   - Open the generated `.xworkspace` project in Xcode and navigate to `Taget > Info > URL Types`
   - Add a new URL Type with `Identifier` as `REVERSED_CLIENT_ID` and `URL Scheme` as `value from GoogleService-Info.plist and used while setting up the plugin`
   - Clean Build `command + K` and re-run the app _You might need to unistall the app from device_

#### Facebook Auth Plugin

1. Create a new app from Facebook Developers site https://developers.facebook.com/
2. Run `npm install @ionic-native/facebook`
3. Run the following command changing the `APP_ID` and `APP_NAME` variables `ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"`
4. In the Firebase Console enable `Facebook` as an authentication Method setting up the same `APP_ID` and the `APP_SECRET` provided by the Facebook Developer Console. _Note: Copy the URL provided at the end off the Facebook form to proceed step 5._
5. Return to the Facebook Developer Console and configure the following:
   1. Navigate to `Products > Facebook SignIn > Configuration`
   2. Copy the URL from Firebase in the `URI Callback OAuth Validate` field
   3. Navigate to `Products > Facebook SignIn > Quick Start`
   4. Add the Bundle ID from `config.xml` to both `iOS` and `Android` for Facebook SDK
   5. Authenticate Android
      5.A. _NO SHA1 Created_ Navigate back to `Products > Facebook SignIn > Configuration > Basic Configuration` and activate the option `Inicio de sesión único` for both `iOS` and `Android` _Aditionally in Android we need to provide a Key Hash from command `keytool -exportcert -alias androiddebugkey -keystore debug.keystore | openssl sha1 -binary | openssl base64` (password: android)_
      5.B. _SHA1 from Google Plugin_ If you had already created a key, use it from the one stored in the `AndroidKeys` folder. To get more detail see the previous section _step 5_
6. Define plugin usage + Angular Fire

`app.module.ts`

```ts
import { Facebook } from '@ionic-native/facebook/ngx';
// ...
  providers: [
    Facebook,
  // ...
```

`fire-auth.service.ts`

```typescript
  async nativeGoogleLogin() {
    try {
      const facebookUser = await this.facebook.login(['email']);
      const response = await this.fireAuth.signInWithCredential(
        // Use the accessToken from plugin to connect via Angular Fire
        auth.FacebookAuthProvider.credential(
          facebookUser.authResponse.accessToken
        )
      );
      const user: User = {
        uid: response.user.uid,
        email: response.user.email,
        displayName: response.user.displayName,
        photoURL: response.user.photoURL + '?height=500',
        phoneNumber: response.user.phoneNumber,
        address: null,
        role: null,
        whatsapp: null
      };
      return this.updateUserData(user);
    } catch (err) {
      this.presentAlert('Facebook Err', err);
    }
  }
```

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

### Geolocation

https://ionicframework.com/docs/native/geolocation

This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.

```console
ionic cordova plugin add cordova-plugin-geolocation
npm install @ionic-native/geolocation
```

_Note: For iOS usage add in `config.xml` the following code at the end and before closing `</widget>` tag, to enable a message for the user to allow the location properties_

`config.xml`

```xml
<!-- ... -->

<!-- Allows the app to use location while ITS IN USE target="NSLocationWhenInUseUsageDescription"-->
<!-- Allows the app to ALWAYS use the location target="NSLocationAlwaysAndWhenInUseUsageDescription" -->
  <edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
    <!-- <string>Allow this app to use your location.</string> -->
    <string>HERE GOES MESSAGE TO DISPLAY WHEN LOCATION IS ASKED (One time only)</string>
  </edit-config>

<!-- ... -->
</widget>
```

`app.module.ts`

```typescript
import { Geolocation } from '@ionic-native/geolocation/ngx';
// ...
providers: [
  // ...
  Geolocation
];
```

`geolocation.service.ts`

```typescript
import { Geolocation } from '@ionic-native/geolocation/ngx';
// ...
export class GeolocationService {
  constructor(private geolocation: Geolocation) {}

  getCurrentPosition() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        // resp.coords.latitude
        // resp.coords.longitude
      })
      .catch(error => {
        console.log('Error getting location', error);
      });
  }

  getRealTimePosition() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe(data => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }
}
```

### Camera & Photo Gallery (Image Picker)

https://ionicframework.com/docs/native/camera
https://ionicframework.com/docs/native/image-picker

Enables the camera & photo gallery usage for all type of devices

```console
ionic cordova plugin add cordova-plugin-camera
npm install @ionic-native/camera

ionic cordova plugin add cordova-plugin-telerik-imagepicker
npm install @ionic-native/image-picker
```

_IMPORTANT: For iOS setup in the `config.xml` inside of the `<platform name='ios>` section add the following lines to enable the iOS devices use the camera functions in order to work properly_

`config.xml`

```xml
<!-- Here goes more configurations in `config.xml` -->
<platform name="ios">
  <config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
    <string>Enable camera access</string>
  </config-file>
  <!-- More things goes here -->
</platform>
```

`app.module.ts`

```typescript
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
// ...
providers: [Camera, ImagePicker];
// ...
```

`picture.service.ts`

```typescript
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
// ...
export class PictureService {
  // This is where all the image paths will be stored
  images: string[] = [];

  constructor(private camera: Camera, private imagePicker: ImagePicker) {}

  takePhoto() {
    let options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        // URL String with Base64 image path
        this.images.unshift(`data:image/jpeg;base64,${imageData}`);
      },
      err => {
        // Handle error
        console.log(err);
      }
    );
  }

  selectFromGallery() {
    this.imagePicker
      .getPictures({
        maximumImagesCount: 5, // Limits the number of images to select
        outputType: 1
      })
      .then(
        selectedImg => {
          selectedImg.forEach(selected =>
            this.images.unshift(`data:image/jpeg;base64,${selected}`)
          );
        },
        err => {
          // Handle error
          console.log(err);
        }
      );
  }
}
```

### Play Sounds (HowlerJS)

```console
npm install howler --save
```

```typescript
import { Howl } from 'howler';

playSound(sound: string) {
    var sound = new Howl({
      src: [`./assets/sounds/${sound}.mp3`]
    });
    sound.play();
  }
```

## Guards (CanLoad)

This guards prevents the navigation between pages based on LazyLoad

```console
ionic g guard guards/<guard-name>

Which interfaces would you like to implement?
  ◯ CanActivate
  ◯ CanActivateChild
❯ ◉ CanLoad
```
