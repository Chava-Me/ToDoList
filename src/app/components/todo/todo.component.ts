import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private _todo:Itodo

  constructor() { }
  

  @Input() set todo(todo:Itodo){
    this._todo=todo;
  }

  get todo(){
    return this._todo;
  }

  ngOnInit(): void {
  }

  onComplete(){
this.todo.isCompleted=true;
  }

  onArchive(){
    this.todo.isArchived=true;
  }

}
