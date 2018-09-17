import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(time: number, args?: any): number {
    console.log('timeFormat arg:', time);
    console.log('formatted time: ', parseFloat((time / 1000).toFixed(2)));
    return parseFloat((time / 1000).toFixed(2));
  }

}
