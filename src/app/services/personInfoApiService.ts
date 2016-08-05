import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

interface PersonInfo {
  employmentHistory: string[]; // todo
}

@Injectable()
export class PersonInfoApiService {
  constructor(private http: Http) {}

  find(personId: number) {
    // todo: needs work
    return this.http.get('/people/' + personId + '/index.json' )
        .map(res => <PersonInfo[]>res.json());
  }
}
