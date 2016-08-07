import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mockPersonData } from './temporaryData/personInfo';
import { PersonInfo } from './interfaces';

@Injectable()
export class PersonInfoApiService {
  constructor(private http: Http) {}


  find(personId: number) {
    // todo: needs work
    // return this.http.get('/people/' + personId + '/index.json' )
    //     .map(res => <PersonInfo[]>res.json());
    // return

    //return
    Observable.of(new )
  }
}
