import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TodoService } from './todo.service';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoSearchComponent,
  ],
  imports: [FormsModule, BrowserModule, ReactiveFormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
