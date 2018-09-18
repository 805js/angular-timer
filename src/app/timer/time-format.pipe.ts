import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(time: number, args?: any): number {
    return parseFloat((time / 1000).toFixed(2));
  }
}
