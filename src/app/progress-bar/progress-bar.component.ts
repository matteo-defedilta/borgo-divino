import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  progressValue: number;
  daysCount:number;

  ngOnInit(): void {
    let currentDate:any = new Date();
    let TDay:any = new Date("October, 28, 2021");
    let DayCount = (TDay - currentDate) / (1000 * 60 * 60 * 24);
    this.daysCount = Math.round(DayCount);
    this.progressValue = 100-(DayCount*100/365);
  }

}
