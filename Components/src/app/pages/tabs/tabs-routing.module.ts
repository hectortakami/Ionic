import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab1'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '../slides/slides.module#SlidesPageModule'
      },
      {
        path: 'tab2',
        loadChildren: '../segment/segment.module#SegmentPageModule'
      },
      {
        path: 'tab3',
        loadChildren:
          '../reorder-group/reorder-group.module#ReorderGroupPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
