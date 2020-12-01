import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverPageRoutingModule } from './popover-routing.module';

import { PopoverPage } from './popover.page';
import { ComponentsModule } from '../../components/components.module';
import { PopoverInfoPage } from '../popover-info/popover-info.page';
import { PopoverInfoPageModule } from '../popover-info/popover-info.module';

@NgModule({
  entryComponents: [PopoverInfoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    ComponentsModule,
    PopoverInfoPageModule
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
