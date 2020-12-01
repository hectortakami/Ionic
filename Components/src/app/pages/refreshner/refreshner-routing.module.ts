import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreshnerPage } from './refreshner.page';

const routes: Routes = [
  {
    path: '',
    component: RefreshnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreshnerPageRoutingModule {}
