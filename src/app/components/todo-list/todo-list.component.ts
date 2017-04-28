import { Component, OnInit } from '@angular/core';

import { Todo } from "../../models/todo";
import { TodoDataService } from "../../services/todo-data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.getTodoList();
  }

  deleteTodo(todo: Todo): void {
    // here we will call the service that talks to the api

    let deleteIndex: number = this.todoList.indexOf(todo);
    if (deleteIndex > -1) {
      this.todoList.splice(deleteIndex, 1);
    }

    console.log("deleted:", todo);
  }

  updateTodo(todo: Todo): void {
    // here we will call the service that talks to the api

    if (todo.completed == false) {
      todo.completed = true;
    } else todo.completed = false;

    console.log("updated:", todo);
  }

  getTodoList(): void {
    this.todoDataService.getTodos()
      .subscribe(data => {
        if (data.success == true) {
          this.todoList = data.todos;
          console.log("getTodos() successful");
        }
      });
  }

}
