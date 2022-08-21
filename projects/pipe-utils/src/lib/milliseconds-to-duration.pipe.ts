import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({
  name: 'millisecondsToDuration'
})
export class MillisecondsToDurationPipe implements PipeTransform {

  transform(milliseconds: number): null | string {

    const duration = Duration.fromObject({ 
      milliseconds, 
      seconds: 0, 
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 0, 
      months: 0,
      years: 0,
    }).normalize();
    
    const seconds = duration.seconds;
    const minutes = duration.minutes;
    const hours = duration.hours;
    const days = duration.days;
    const weeks = duration.weeks;
    const months = duration.months;
    const years = duration.years;

    const retVal = [];

    if (years > 0) {
      retVal.push(`${years}y`);
    }

    if (months > 0) {
      retVal.push(`${months}mo`);
    }

    if (weeks > 0) {
      retVal.push(`${weeks}w`);
    }

    if (days > 0) {
      retVal.push(`${days}d`);
    }

    if (hours > 0) {
      retVal.push(`${hours}h`);
    }

    if (minutes > 0) {
      retVal.push(`${minutes}m`);
    }

    if (seconds > 0) {
      retVal.push(`${seconds}s`);
    }

    return retVal.join(' ');
  }
}
