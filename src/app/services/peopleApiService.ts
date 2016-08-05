import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

interface Person {
  id: string;
  name: string;
  surname: string;
  avatarUrl: string;
}

@Injectable()
export class PeopleApiService {
  constructor(private http: Http) {}

  find(personId: number) {
    return this.http.get('/people/index.json').map(res => <Person[]>res.json());
  }
}
