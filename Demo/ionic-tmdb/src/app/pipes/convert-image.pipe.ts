import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertImage'
})
export class ConvertImagePipe implements PipeTransform {
  tmdbImg = 'https://image.tmdb.org/t/p/w500';
  transform(img_path: string): string {
    if (img_path) {
      return `${this.tmdbImg}${img_path}`;
    } else {
      return './assets/no-poster.png';
    }
  }
}
