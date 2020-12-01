import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./pages/alert/alert.module').then(m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () =>
      import('./pages/action-sheet/action-sheet.module').then(
        m => m.ActionSheetPageModule
      )
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./pages/avatar/avatar.module').then(m => m.AvatarPageModule)
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./pages/button/button.module').then(m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./pages/checkbox/checkbox.module').then(m => m.CheckboxPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () =>
      import('./pages/date-time/date-time.module').then(
        m => m.DateTimePageModule
      )
  },
  {
    path: 'floating-action-button',
    loadChildren: () =>
      import(
        './pages/floating-action-button/floating-action-button.module'
      ).then(m => m.FloatingActionButtonPageModule)
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./pages/input/input.module').then(m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'item-sliding',
    loadChildren: () =>
      import('./pages/item-sliding/item-sliding.module').then(
        m => m.ItemSlidingPageModule
      )
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./pages/loading/loading.module').then(m => m.LoadingPageModule)
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./pages/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () =>
      import('./pages/popover/popover.module').then(m => m.PopoverPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () =>
      import('./pages/progress-bar/progress-bar.module').then(
        m => m.ProgressBarPageModule
      )
  },
  {
    path: 'refreshner',
    loadChildren: () =>
      import('./pages/refreshner/refreshner.module').then(
        m => m.RefreshnerPageModule
      )
  },
  {
    path: 'search-bar',
    loadChildren: () =>
      import('./pages/search-bar/search-bar.module').then(
        m => m.SearchBarPageModule
      )
  },
  {
    path: 'slides',
    loadChildren: () =>
      import('./pages/slides/slides.module').then(m => m.SlidesPageModule)
  },
  {
    path: 'segment',
    loadChildren: () =>
      import('./pages/segment/segment.module').then(m => m.SegmentPageModule)
  },
  {
    path: 'toast',
    loadChildren: () =>
      import('./pages/toast/toast.module').then(m => m.ToastPageModule)
  },
  {
    path: 'split-pane',
    loadChildren: () =>
      import('./pages/split-pane/split-pane.module').then(
        m => m.SplitPanePageModule
      )
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'reorder-group',
    loadChildren: () =>
      import('./pages/reorder-group/reorder-group.module').then(
        m => m.ReorderGroupPageModule
      )
  },
  {
    path: 'popover-info',
    loadChildren: () => import('./pages/popover-info/popover-info.module').then( m => m.PopoverInfoPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./pages/range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'skeleton-text',
    loadChildren: () => import('./pages/skeleton-text/skeleton-text.module').then( m => m.SkeletonTextPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
