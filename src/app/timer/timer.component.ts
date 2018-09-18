import { Component, HostBinding, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
})
export class TimerComponent implements OnInit {
  @HostBinding('class.running') running = false;
  @HostBinding('class.added-flash') addedFlash = false;

  constructor(private timerService: TimerService) {
    this.timerService.running.subscribe(runningChange => {
      this.running = runningChange;
    });
    timerService.timeListChange.subscribe(change => {
      const vm = this;
      this.addedFlash = true;
      setTimeout(function() {
        vm.addedFlash = false;
      }, 100);
    });
  }

  ngOnInit() {
  }

}
