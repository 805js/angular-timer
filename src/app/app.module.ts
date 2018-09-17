import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerButtonBarComponent } from './timer/timer-button-bar/timer-button-bar.component';
import { TimerMarkedListComponent } from './timer/timer-marked-list/timer-marked-list.component';
import { TimerDisplayComponent } from './timer/timer-display/timer-display.component';
import { TimeFormatPipe } from './timer/time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerButtonBarComponent,
    TimerMarkedListComponent,
    TimerDisplayComponent,
    TimeFormatPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
