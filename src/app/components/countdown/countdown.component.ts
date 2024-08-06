import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  private _date: any;
  @Input() set date(date: any) {
    this._date = date;
    this.resetCountDown();
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

  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setNewTimeout() {

    let res: Date = new Date(this.date);
    let current: Date = new Date();
    if (res > current) {
      this.displayTime = '';
      this.currentTime = res.getTime() - current.getTime();
      this.currentTime /= this.millisToSeconds;
    }
    else {
      this.displayTime = '00:00:00:00';
      this.currentTime = 0;
    }
  }

  setDisplayTime(): void {
    if (this.currentTime <= 0) {
      this.displayTime = '00:00:00:00';
      this.currentTime = 0;
      this.subscription.unsubscribe(); // Stop the interval when countdown ends
      return;
    }
    this.currentTime -= 1;
    let days = Math.floor(this.currentTime / this.secondsToMinutes / this.minutesToHours / this.hoursToDay);
    let hours = Math.floor((this.currentTime / this.secondsToMinutes / this.minutesToHours) % this.hoursToDay);
    let minutes = Math.floor((this.currentTime / this.secondsToMinutes) % this.minutesToHours);
    let seconds = Math.floor(this.currentTime % this.secondsToMinutes);
    this.displayTime = `${formatZeros(days)}:${formatZeros(hours)}:${formatZeros(minutes)}:${formatZeros(seconds)}`;
  }
  private startCountdown(): void {
    this.subscription.add(
      interval(1000).subscribe(() => this.setDisplayTime())
    );
  }

  resetCountDown() {
    if (this.subscription)
      this.subscription.unsubscribe();
    this.subscription = new Subscription();
    this.setNewTimeout();
    if (this.currentTime > 0) {
      this.startCountdown(); // Resubscribe to the new interval if needed
    }
  }

}

function formatZeros(number) {
  if (number < 0)
    return '00';
  if (number < 10)
    return '0' + number;
  return number;
}

