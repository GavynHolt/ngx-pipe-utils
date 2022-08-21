import { NgModule } from '@angular/core';
import { MillisecondsToDurationPipe } from './milliseconds-to-duration.pipe';


@NgModule({
  declarations: [MillisecondsToDurationPipe],
  imports: [],
  exports: [MillisecondsToDurationPipe],
})
export class PipeUtilsModule {}
