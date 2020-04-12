import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderGroupPage } from './reorder-group.page';

const routes: Routes = [
  {
    path: '',
    component: ReorderGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderGroupPageRoutingModule {}
