import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlidePosterComponent } from './slide-poster/slide-poster.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  entryComponents: [MovieDetailComponent],
  declarations: [
    SlideShowComponent,
    SlidePosterComponent,
    MovieDetailComponent
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [SlideShowComponent, SlidePosterComponent, MovieDetailComponent]
})
export class ComponentsModule {}
