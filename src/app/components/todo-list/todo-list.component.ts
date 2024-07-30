import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,OnDestroy {

  todos:Itodo[]=[];
  private subscription:Subscription=new Subscription()
  
  constructor(private dataservice:TodoDataService) { }


  ngOnInit(): void {
    this.subscription.add(
      this.dataservice.getTodos().subscribe(data=>this.todos=data)
    )
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
