import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSlidingPageRoutingModule } from './item-sliding-routing.module';

import { ItemSlidingPage } from './item-sliding.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSlidingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ItemSlidingPage]
})
export class ItemSlidingPageModule {}
