import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../components/new-todo/new-todo.component';
import { Subscription } from 'rxjs';
import { TodoDataService } from '../services/todo-data.service';
import { Itodo } from '../models/todo.interface';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit,OnDestroy {

  
  private subscription:Subscription=new Subscription();
  public todoList:Itodo[];
  public selectedTodo:Itodo;

  constructor(public dialog:MatDialog,
    private dataservice:TodoDataService) { }


  ngOnInit(): void {
    this.subscription.add(
      this.dataservice.getTodos().subscribe(data=>this.todoList=data)
    )
    this.subscription.add(
      this.dataservice.getSelected().subscribe(data=>this.selectedTodo=data)
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openDialog(){
    const ref=this.dialog.open(NewTodoComponent,{width:'250px'});
    ref.afterClosed().subscribe(result=>{

    })
  }

}
