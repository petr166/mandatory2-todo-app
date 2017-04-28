import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo } from "../../models/todo";
import { TodoDataService } from "../../services/todo-data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  newTodoForm: FormGroup;
  todoList: Todo[];

  constructor(private formBuilder: FormBuilder, private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.initForm();
    this.getTodoList();
  }

  // initialize the 'newTodo' form
  initForm(): void {
    this.newTodoForm = this.formBuilder.group({
      name: ["", [ Validators.required, Validators.minLength(2) ]]
    });
  }

  // add button action
  onAdd(): void {
    let formData = this.newTodoForm.value;
    this.todoDataService.addTodo(formData)
      .subscribe(data => {
        if (data.success == true) {
          let newTodo: Todo = { name: formData.name, completed: false };
          this.todoList.push(newTodo);
          console.log("added:", newTodo);
        }
      });

    this.newTodoForm.patchValue({name:""});
  }

  // delete button action
  onDelete(todo: Todo): void {
    this.todoDataService.deleteTodo(todo)
      .subscribe(data => {
        if (data.success == true) {
          let deleteIndex: number = this.todoList.indexOf(todo);
          if (deleteIndex > -1) {
            this.todoList.splice(deleteIndex, 1);
          }
          console.log("deleted:", todo);
        }
      });
  }

  // checkbox toggle action
  onUpdate(todo: Todo): void {
    this.todoDataService.updateTodo(todo)
      .subscribe(data => {
        if (data.success == true) {
          todo.completed = !todo.completed;
          console.log("updated:", todo);
        }
      });
  }

  // retrieve the todos list
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
