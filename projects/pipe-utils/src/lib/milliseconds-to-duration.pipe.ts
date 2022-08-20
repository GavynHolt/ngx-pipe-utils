import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecondsToDuration'
})
export class MillisecondsToDurationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
