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
      sectionsColor: ['#22222', '#22222', '#fff', '#22222', '#fff'],
      showActiveTooltip: true,
      slidesNavigation: true,
      anchors: ['navbar', 'home', 'about', 'projects', 'contact', 'footer'],
      autoScrolling: true,
      scrollHorizontally: true
    });
  }
}
