import { Component } from '@angular/core';
import * as fullpage from 'fullpage.js/dist/fullpage.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPortfolio';
  ngOnInit() {
    new fullpage('#fullpage', {
      navigation: true,
      sectionsColor: ['#f2f2f2', '#fff', '#f2f2f2'],
      showActiveTooltip: true,
      controlArrows: false,
      slidesNavigation: true,
      anchors: ['home', 'about', 'projects'],
    });
  }
}
