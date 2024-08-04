import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  refreshIntervalId: any;
  @Input() date:any;
  displayTime: string='00:00:00';
  currentTime:number;

  constructor() { }



  ngOnInit(): void {
   
    let res: Date = new Date(this.date);
    let current:Date=new Date();
    if(res>current){
    this.currentTime=res.getTime()-current.getTime();
this.refreshIntervalId =setInterval(()=>this.setDisplayTime(),1000)
  }
  }
  setDisplayTime(): void {
    this.currentTime-=1000;
    if(this.currentTime<0){
clearInterval(this.refreshIntervalId);
return;
    }
    let hours=formatZeros(this.currentTime/1000/60/60);
    let minutes=formatZeros((this.currentTime-(hours*60*60*1000))/1000/60);
    let seconds=formatZeros(this.currentTime-(hours*60*60*1000)-(minutes*60*1000));
    this.displayTime=`${hours}:${minutes}:${seconds}`;
  }

}

function formatZeros(number){
  if(number<0)
    return '00';
if(number<10)
  return number+'0';
return number;
}

