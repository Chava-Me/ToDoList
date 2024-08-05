import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class NewTodoComponent implements OnInit {

  minDate = new Date();

  myForm: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    date: ['', [Validators.required]]
  });

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private dataservice: TodoDataService
  ) {

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.myForm.valid) {
      let newTodo: Itodo = {
        description: this.myForm.value['description'],
        title: this.myForm.value['title'],
        endDate: this.myForm.value['date'],
        isArchived: false,
        isCompleted: false,
        selected: false
      }
      this.dataservice.addNewTodo(newTodo);
      this.dialog.closeAll();
    }
  }

}
