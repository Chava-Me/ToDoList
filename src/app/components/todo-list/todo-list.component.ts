import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todos: Itodo[];

  constructor(private dataservice: TodoDataService) { }


  onClick(item) {
    this.todos.forEach(e => e.selected = false)
    this.dataservice.setSelected(item);
    item.selected = true;

  }

  ngOnInit(): void {
  }
}
