import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';

import { PeopleApiService, Person } from '../../services';
import { Observable } from 'rxjs/Observable';
// NOTE: work in progress
let mockPerson: Person[];

let mockPersons: Array<Person[]> = [mockPerson];

import {AboutUsComponent} from  './';

describe('aboutMe', () => {

  let peopleApiService: PeopleApiService;

  // beforeEach(inject([PeopleApiService], p => {
  //   peopleApiService = p;
  //   peopleApiService.findAll = function(){
  //     return Observable.from(mockPersons);
  //   }
  // }));

  // let aboutUs : AboutUsComponent = new AboutUsComponent(peopleApiService);

  // it('should have initial properties set', () => {
  //   aboutUs.ngOnInit();
  //   expect(aboutUs.people).toBeUndefined();
  // });

  it('should work', () => {
    expect(true).toBe(true);
  });

});
