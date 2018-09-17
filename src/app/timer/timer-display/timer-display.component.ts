import { TimerService } from './../timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {
  currentTime;
  constructor(private timerService: TimerService) {
    timerService.time.subscribe(newTime => {
      this.currentTime = newTime;
    });
  }

  ngOnInit() {
  }

}
