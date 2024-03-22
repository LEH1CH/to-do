/* import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TodoItem } from './models/todo-item.model';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoPageResolverService implements Resolve<TodoItem[]> {

  constructor(private todoService: TodoService) { }

  resolve(): TodoItem[] | Observable<TodoItem[]> | Promise<TodoItem[]> {
    return this.todoService.getTodoList();
  }
} */
