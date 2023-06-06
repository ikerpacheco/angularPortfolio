import { Component } from '@angular/core';
import * as fullpage from 'fullpage.js/dist/fullpage.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  first_color = '#fff';
  second_color = '#22222';
  title = 'angularPortfolio';
  myPage: any;
  ngOnInit() {
    this.myPage = new fullpage('#fullpage', {
      navigation: true,
      sectionsColor: [this.second_color, this.first_color, this.second_color, this.first_color],
      showActiveTooltip: true,
      slidesNavigation: true,
      anchors: ['home', 'about', 'projects', 'contact'],
      autoScrolling: true,
      scrollHorizontally: true
    });
  }

  // enableDarkMode(): void {
  //   console.log('Dark Mode Enabled');
  //   this.first_color = '#1C1C1C';
  //   this.second_color = '#232323';

  //   console.log(this.myPage.sectionsColor);
  //   setTimeout(() => {
  //     this.myPage.sectionsColor = [this.second_color, this.first_color, this.second_color, this.first_color];
  //     console.log(this.myPage.sectionsColor);
  //     this.myPage.reBuild();
  // }, 100);
  // }
}
