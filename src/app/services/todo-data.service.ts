import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Itodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private mock = [
    {
      title: 'Buy clothing',
      description: 'description',
      endDate: '10/10/2024',
      isArchived: false,
      isCompleted: false,
      selected: false
    },
    {
      title: 'change class',
      description: 'description',
      endDate: '03/12/2024',
      isArchived: false,
      isCompleted: false,
      selected: false
    },
    {
      title: 'Learn for the test',
      description: 'description',
      endDate: '05/02/2024',
      isArchived: false,
      isCompleted: false,
      selected: false
    }]


  private _todo_subject: BehaviorSubject<Itodo[]> = new BehaviorSubject<Itodo[]>(this.mock)

  private _selected_subject: Subject<Itodo> = new Subject<Itodo>()

  constructor() { }

  getTodos(): Observable<Itodo[]> {
    return this._todo_subject.asObservable();
  }

  getSelected(): Observable<Itodo> {
    return this._selected_subject.asObservable();
  }

  setSelected(todo: Itodo) {
    return this._selected_subject.next(todo);
  }

  addNewTodo(todo: Itodo) {
    this._todo_subject.value.push(todo);
    this._todo_subject.next(this._todo_subject.value);
  }
}



