import { Pipe, PipeTransform } from '@angular/core';
import { Cast } from '../models/interfaces';

@Pipe({
  name: 'noEmptyImages'
})
export class NoEmptyImagesPipe implements PipeTransform {
  transform(value: Cast[]): Cast[] {
    return value.filter((actor: Cast) => actor.profile_path != null);
  }
}
