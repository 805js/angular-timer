import { Component, HostBinding, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit {
  constructor(private timerService: TimerService) {
    timerService.running.subscribe(runningChange => {
      this.running = runningChange;
    });
  }

  @HostBinding('class.running') running = false;

  ngOnInit() {
  }

}
