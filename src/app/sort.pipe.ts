import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[]| number[],direction : 'desc'| 'asc' = 'asc') {
    const values =[...value];
    values.sort((a,b)=> {
      if(direction === 'desc') {
        return a > b ? -1: 1;
      }
      else {
        return a > b ? 1: -1;
      }
    });
    return values;
  }

}
