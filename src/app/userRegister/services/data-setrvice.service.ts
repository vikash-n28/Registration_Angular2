import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

//model
import { UserSignUp } from '../model/userSignUp.model'

@Injectable()
export class DataSetrviceService {
  baseUrl = 'http://localhost:8080';
  results = [];
  constructor(private http: Http,
    private https: HttpClient) { }
  
  signUp(user){
    var objectData = new Object();
    console.log(new UserSignUp('','','','',6,'',''),user);
    // return this.https.post<ItemsResponse>('/api/items').subscribe(data => {;
    //   this.results = data.results;
    //     return this.results;
    // })
    // const req = this.https.post('http://localhost:8080/registration-Angular2/save', user);
    // // 0 requests made - .subscribe() not called.
    // req.subscribe(data => {
    //   this.results = data['results'];
    //   console.log('this.results',this.results);
    //   return this.results;
    // });
    // 1 request made.
    // req.subscribe();
  }
}

interface ItemsResponse {
  results: string[];
}
