import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  styles: [require('./aboutMe.component.css')],
  template: require('./aboutMe.component.html')
})
export class AboutMeComponent {
  test: string = 'Hello from NG2!';
}
