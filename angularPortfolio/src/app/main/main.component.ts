import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  valueDisplays!: NodeListOf<Element>;
  interval = 5000;
  startValue = 0;
  endValue = 0;
  duration = 0;
  counter = 0;

  constructor() {
  }
  ngOnInit() {
    this.valueDisplays = document.querySelectorAll('.num');
    console.log(this.valueDisplays);

    this.valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute("data-val") || "0", 10);
      const duration = Math.floor(this.interval / endValue);
      const counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue.toString();
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
}
