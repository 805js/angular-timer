import { Component } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-marked-list',
  templateUrl: './timer-marked-list.component.html',
  styleUrls: ['./timer-marked-list.component.scss']
})
export class TimerMarkedListComponent {
  timerList: Set<number>;
  constructor(timerService: TimerService) {
    timerService.recordedTimeStream.subscribe(change => {
      this.timerList = change;
    });
  }
}
