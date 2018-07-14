import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  public hours;
  public minutes;
  public seconds;

  constructor() { }

  ngOnInit() {
    const me = this;
    window.setInterval(() => {
      const date = new Date();
      me.hours = date.getHours();
      me.minutes = date.getMinutes();
      me.seconds = date.getSeconds();
    }, 1000);

  }

}
