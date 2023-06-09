import { Component } from '@angular/core';
import * as fullpage from 'fullpage.js/dist/fullpage.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularPortfolio';
  greyWhite = '#22222';
  white = '#fff';
  greyDark = '#181818';
  Dark = '#090909';

  ngOnInit() {
    new fullpage('#fullpage', {
      navigation: true,
      sectionsColor: [this.greyWhite, this.greyWhite, this.white, this.greyWhite, this.white, this.greyWhite],
      showActiveTooltip: true,
      slidesNavigation: true,
      anchors: ['navbar', 'home', 'about', 'projects', 'contact', 'footer'],
      autoScrolling: true,
      scrollHorizontally: true
    });
  }
}
