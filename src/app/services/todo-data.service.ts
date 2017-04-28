import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoDataService {
  url: string = "https://todo-api-blabla.herokuapp.com/todos";

  constructor(private http: Http) { }

  // get all todos
  getTodos(): any {
    let observableReq = this.http.get(this.url).map(this.extractData);

    return observableReq;
  }

  // add a new todo
  addTodo(todo): any {
    let route = this.url + "/create";

    // prepare the request
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let reqObtions = new RequestOptions({ headers: headers });
    let reqBody = {name: todo.name};

    // POST
    let observableReq = this.http.post(route, reqBody, reqObtions)
      .map(this.extractData);

    return observableReq;
  }

  // delete a todo
  deleteTodo(todo): any {
    let route = this.url + "/delete";

    // prepare the request
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let reqObtions = new RequestOptions({ headers: headers });
    let reqBody = {name: todo.name};

    // POST
    let observableReq = this.http.post(route, reqBody, reqObtions)
      .map(this.extractData);

    return observableReq;
  }

  // update a todo
  updateTodo(todo): any {
    let route = this.url + "/update";

    // prepare the request
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let reqObtions = new RequestOptions({ headers: headers });
    let reqBody = {name: todo.name};

    // POST
    let observableReq = this.http.post(route, reqBody, reqObtions)
      .map(this.extractData);

    return observableReq;
  }

  extractData(res: Response): any {
    let body = res.json();
    return body || { };
  }

}
