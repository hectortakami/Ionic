import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertImagePipe } from './convert-image.pipe';
import { NoEmptyImagesPipe } from './no-empty-images.pipe';
import { FilterCategoryPipe } from './filter-category.pipe';

@NgModule({
  declarations: [ConvertImagePipe, NoEmptyImagesPipe, FilterCategoryPipe],
  imports: [CommonModule],
  exports: [ConvertImagePipe, NoEmptyImagesPipe, FilterCategoryPipe]
})
export class PipesModule {}
