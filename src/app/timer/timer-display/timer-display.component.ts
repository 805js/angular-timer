import { Component, OnInit, HostBinding } from '@angular/core';
import { TimerService } from './../timer.service';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent {
  currentTime;
  constructor(private timerService: TimerService) {
    timerService.time.subscribe(newTime => {
      this.currentTime = newTime;
    });
  }

  @HostBinding('class.timer-display') true;
}
