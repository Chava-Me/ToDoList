import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TollbarComponent } from './components/tollbar/tollbar.component';
import { MaterialModule } from './material/material.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TollbarComponent,
    TodoListComponent,
    TodoContainerComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
