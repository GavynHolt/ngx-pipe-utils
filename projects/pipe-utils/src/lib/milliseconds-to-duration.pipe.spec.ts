import { MillisecondsToDurationPipe } from './milliseconds-to-duration.pipe';
import moment from 'moment';

describe('MillisecondsToDurationPipe', () => {
  it('creates an instance', () => {
    const pipe = new MillisecondsToDurationPipe();
    expect(pipe).toBeTruthy();
  });
    
  it('converts 61000ms to "1m 1s"', () => {
    const pipe = new MillisecondsToDurationPipe();
    const milliseconds = 61000;
    const expected = "1m 1s";
    const actual = pipe.transform(milliseconds);
    expect(actual).toBe(expected);
  });

  it('converts 3 weeks 4 days, 6 hours, 0 minutes and 15 seconds from ms to duration', () => {
    const pipe = new MillisecondsToDurationPipe();
    const milliseconds = moment.duration({
      weeks: 3,
      days: 4,
      hours: 6,
      minutes: 0,
      seconds: 15,
    });
    const expected = '3w 4d 6h 15s';
    const actual = pipe.transform(milliseconds.asMilliseconds());
    expect(actual).toBe(expected);

  })
});
