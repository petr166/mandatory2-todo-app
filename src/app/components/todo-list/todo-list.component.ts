import { Component, OnInit } from '@angular/core';

import { Todo } from "../../models/todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  todoList: Todo[];

  // mock data, delete after connected to API
  todos: Todo[] = [
    { name: "Wash", completed: false },
    { name: "Go", completed: false },
    { name: "Clean", completed: false },
    { name: "Run", completed: false },
  ];

  constructor() { }

  ngOnInit() {
    this.todoList = this.todos;
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

}
