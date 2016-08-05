import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  // styleUrls: [ './app.style.css' ],
  template: require('./aboutMe.component.html')
})
export class AboutMeComponent {
  test: string = 'Hello from NG2!';
}
