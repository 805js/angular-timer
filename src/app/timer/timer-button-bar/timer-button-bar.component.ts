import { TimerService } from './../timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-button-bar',
  templateUrl: './timer-button-bar.component.html',
  styleUrls: ['./timer-button-bar.component.scss']
})
export class TimerButtonBarComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  ngOnInit() {
  }

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
    console.log('button reset');
    this.timerService.resetTimer();
  }

}
