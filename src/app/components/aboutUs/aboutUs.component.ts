import { Component, OnInit } from '@angular/core';
import { PeopleApiService, Person } from '../../services';
@Component({
  selector: 'about-us',
  styles: [require('./aboutUs.component.css')],
  template: require('./aboutUs.component.html'),
  providers: [
    PeopleApiService
  ]
})
export class AboutUsComponent implements OnInit {
  people: Person[];

  constructor(private _peopleApiService: PeopleApiService) {}

  ngOnInit() {
    return this._peopleApiService.findAll()
                .subscribe( people => {
                  this.people = people;
                });
  }
}
