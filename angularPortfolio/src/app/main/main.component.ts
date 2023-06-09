import { Component, OnInit, HostListener } from '@angular/core';
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
  firstImage: boolean = true;
  secondImage: boolean = false;
  thirdImage: boolean = false;

  images: string[] = ['hi.png', 'laptop.png', 'sunglasses.png'];
  currentImageIndex: number = 0;
  intervalId: any;

  @HostListener('swipeleft')
  onSwipeLeft() {
    this.nextImage();
    this.resetInterval();
  }

  @HostListener('swiperight')
  onSwipeRight() {
    this.previousImage();
    this.resetInterval();
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000); // Change the interval time (in milliseconds) as needed
  }

  resetInterval() {
    clearInterval(this.intervalId);
    this.startInterval();
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  previousImageIndex(): number {
    return (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  constructor() {
  }

  ngOnInit() {
    this.startInterval();
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
