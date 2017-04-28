import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TodoDataService } from "../../services/todo-data.service";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})

export class NewTodoComponent implements OnInit {
  newTodoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.newTodoForm = this.formBuilder.group({
      name: ["", [ Validators.required, Validators.minLength(2) ]]
    });
  }

  onAdd():void {
    let formData = this.newTodoForm.value;
    console.log("formData:", formData);
    console.log("formValid:", this.newTodoForm.valid);

    // here we will call the service that talks to the api
    this.todoDataService.addTodo(formData)
    .subscribe(data => {
      if (data.success == true) {
        console.log("addTodo() successful");
      }
    });

    this.newTodoForm.patchValue({name:""});
  }

}
