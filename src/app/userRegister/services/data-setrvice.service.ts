import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/retry';

//model
import { UserSignUp } from '../model/userSignUp.model'

@Injectable()
export class DataSetrviceService {
  baseUrl = 'http://localhost:8080/server/';
  contentUrl: string;
  constructor(private http: Http,
    private https: HttpClient) { }
  
  //save user
  signUp(body: Object): Observable<UserSignUp[]> {
    // ... Set content type to JSON
    this.contentUrl = "http://localhost:8080/server/register";
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });  // Create a request option
    console.log('bodyString',bodyString,this.baseUrl+this.contentUrl);
    return this.http.post(this.contentUrl, body, options)
    // .map(this.extractData)
    .catch(this.handleErrorObservable); 
    // ...using post request
    // .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

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

  private extractData(res: Response) {
    let body = res.json();
          return body.data || {};
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }


}
