import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefreshnerPageRoutingModule } from './refreshner-routing.module';

import { RefreshnerPage } from './refreshner.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreshnerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RefreshnerPage]
})
export class RefreshnerPageModule {}
