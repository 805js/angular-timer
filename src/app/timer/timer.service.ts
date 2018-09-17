import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class TimerService {
  private recordedTimes: Set<number> = new Set();
  private _recordedTimeStream: BehaviorSubject<Set<number>> = new BehaviorSubject(this.recordedTimes);
  private timeCalculation;
  private _time = 0.00;
  private timeStream = new BehaviorSubject(0.00);
  public get time(): Observable<number> {
    return this.timeStream.asObservable();
  }
  private isRunning;
  private _running: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public get running(): Observable<boolean> {
    return this._running.asObservable();
  }
  public updateRunning(value: boolean) {
    this.isRunning = value;
    this._running.next(value);
  }
  // Calculation State & Utils
  public startTimer(): void {
    if (this.timeCalculation) {
      return;
    }
    this._running.next(true);
    this.timeCalculation = setInterval(() => {
      this._time = this.calculateNextTime();
      this.timeStream.next(this._time);
    }, 10);
  }
  private calculateNextTime(): number {
    return this._time += 10;
  }
  public stopTimer(): void {
    this._running.next(false);
    clearInterval(this.timeCalculation);
    this.timeCalculation = null;
  }
  public markTime(): void {
    this.recordedTimes.add(this._time);
  }
  resetTimer(): void {
    this.stopTimer();
    this.recordedTimes.clear();
    this._time = 0.00;
    this.timeStream.next(this._time);
  }

  public get recordedTimeStream(): Observable<Set<number>> {
    return this._recordedTimeStream.asObservable();
  }
}
