import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoDataService {
  apiUrl: string = "https://todo-api-blabla.herokuapp.com/todos";

  constructor(private http: Http) { }


  // get all todos
  getTodos(): any {
    let observableReq = this.http.get(this.apiUrl).map(this.extractData);
    return observableReq;
  }

  // add a new todo
  addTodo(todo): any {
    let updateReq = this.postTodos("/create", todo);
    return updateReq;
  }

  // delete a todo
  deleteTodo(todo): any {
    let updateReq = this.postTodos("/delete", todo);
    return updateReq;
  }

  // update a todo
  updateTodo(todo): any {
    let updateReq = this.postTodos("/update", todo);
    return updateReq;
  }

  // generic function for POST request to apiUrl/todos/:something
  postTodos(route: string, todo): any {
    let reqUrl: string = this.apiUrl + route;
    console.log(this.apiUrl, reqUrl);

    // prepare the request
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let reqObtions = new RequestOptions({ headers: headers });
    let reqBody = {name: todo.name};

    // POST
    let observableReq = this.http.post(reqUrl, reqBody, reqObtions)
      .map(this.extractData);

    return observableReq;
  }

  // function to extract the response data
  extractData(res: Response): any {
    let body = res.json();
    return body || { };
  }

}
