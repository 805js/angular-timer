import { TimerService } from './../timer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-button-bar',
  templateUrl: './timer-button-bar.component.html',
  styleUrls: ['./timer-button-bar.component.scss']
})
export class TimerButtonBarComponent {

  constructor(private timerService: TimerService) { }

  startTimer(): void {
    this.timerService.startTimer();
  }

  stopTimer(): void {
    this.timerService.stopTimer();
  }

  markTime(): void {
    this.timerService.markTime();
  }

  resetTimer(): void {
    this.timerService.resetTimer();
  }
}
