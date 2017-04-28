import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoDataService {

  constructor(private http: Http) { }

  getTodos(): any {
    let url = "https://todo-api-blabla.herokuapp.com/todos";
    let request = this.http.get(url).map(this.extractData);

    return request;
  }

  extractData(res: Response): any {
    let body = res.json();
    return body || { };
  }

}
