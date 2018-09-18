import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerComponent } from './timer.component';
import { TimerButtonBarComponent } from './timer-button-bar/timer-button-bar.component';
import { TimerMarkedListComponent } from './timer-marked-list/timer-marked-list.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimerComponent,
    TimerButtonBarComponent,
    TimerMarkedListComponent,
    TimerDisplayComponent,
    TimeFormatPipe,
  ],
  exports: [
    TimerComponent,
    TimerButtonBarComponent,
    TimerMarkedListComponent,
    TimerDisplayComponent,
    TimeFormatPipe,
  ]
})
export class TimerModule { }
