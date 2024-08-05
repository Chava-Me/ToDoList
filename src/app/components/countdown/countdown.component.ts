import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  refreshIntervalId: any;
  private _date: any;
  @Input() set date(date: any) {
    this._date = date;
    this.setNewTimeout();
  }
  get date() {
    return this._date
  }
  displayTime: string;
  currentTime: number;

  millisToSeconds: number = 1000;
  secondsToMinutes: number = 60;
  minutesToHours: number = 60;
  hoursToDay: number = 24;

  private subscription: Subscription = new Subscription();

  constructor() { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



  ngOnInit(): void {

  }

  setNewTimeout() {

    let res: Date = new Date(this.date);
    let current: Date = new Date();
    if (res > current) {
      this.currentTime = res.getTime() - current.getTime();
      this.currentTime /= this.millisToSeconds;
      this.subscription.add(
        interval(1000).subscribe(() => this.setDisplayTime())
      )
    }
    else
      this.displayTime = '00:00:00';
  }

  setDisplayTime(): void {
    this.currentTime -= 1;
    if (this.currentTime < 0) {
      return;
    }
    let days = Math.floor(this.currentTime / this.secondsToMinutes / this.minutesToHours / this.hoursToDay);
    let hours = Math.floor((this.currentTime / this.secondsToMinutes / this.minutesToHours) % this.hoursToDay);
    let minutes = Math.floor((this.currentTime / this.secondsToMinutes) % this.minutesToHours);
    let seconds = Math.floor(this.currentTime % this.secondsToMinutes);
    this.displayTime = `${formatZeros(days)}:${formatZeros(hours)}:${formatZeros(minutes)}:${formatZeros(seconds)}`;
  }

}

function formatZeros(number) {
  if (number < 0)
    return '00';
  if (number < 10)
    return '0' + number;
  return number;
}

