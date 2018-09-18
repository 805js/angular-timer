import { TimerModule } from './timer/timer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TimerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
