import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private mock=[
    {title:'newtask',
description:'description',
endDate:'02/02/2024',
isArchived:false,
isCompleted:false
  }]


private _todo_subject:BehaviorSubject<Itodo[]>=new BehaviorSubject<Itodo[]>(this.mock)

  constructor() { }

  getTodos():Observable<Itodo[]>{
return this._todo_subject.asObservable();
  }
}
