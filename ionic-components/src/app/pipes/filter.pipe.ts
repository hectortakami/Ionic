import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], term: string, attribute: string): any[] {
    if (term === '') {
      return arr;
    }

    term = term.toLowerCase();

    return arr.filter(item => {
      return item[attribute].toLowerCase().includes(term);
    });
  }
}
