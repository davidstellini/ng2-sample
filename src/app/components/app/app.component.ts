import { Component } from '@angular/core';
import { PeopleApiService } from '../../';

@Component({
  selector: 'app',
  providers: [
    PeopleApiService
  ],
  // styleUrls: [ './app.style.css' ],
  template: require('./app.component.html')
})
export class App {
  test: string = 'Hello from NG2!';
}
