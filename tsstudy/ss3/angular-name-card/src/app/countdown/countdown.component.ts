import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  number = 0;
  interval: any;
  

  constructor() {
  }

  ngOnInit() {
  }

  start = () => {
    this.interval = setInterval(() => {
      this.number = +this.number + 1;
    }, 500);
  }

  stop = () => {
    clearInterval(this.interval)
  }

  reset = () => {
    this.number = 0;
    this.stop();
  }
}
