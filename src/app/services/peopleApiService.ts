import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

export interface Person {
  id: string;
  name: string;
  surname: string;
  avatarUrl: string;
}

@Injectable()
export class PeopleApiService {
  constructor(private http: Http) {}

  findAll() {
    return this.http.get('people').map(res => <Person[]>res.json());
  }
}
