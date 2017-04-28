import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  newTodoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newTodoForm = this.formBuilder.group({
      name: ["", [ Validators.required, Validators.minLength(2) ]]
    });
  }

  onAdd():void {
    console.log("formData:", this.newTodoForm.value);
    console.log("formValid:", this.newTodoForm.valid);

    this.newTodoForm.patchValue({name:""});
    let formData = this.newTodoForm.value;

    // here we will call the service that talks to the server
  }

}
