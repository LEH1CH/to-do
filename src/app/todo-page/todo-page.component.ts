import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { TodoItem, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  todoItems: TodoItem[] = [];
  filteredTodoList: TodoItem[] = [];

  constructor(private todoService: TodoService) {}

  applyFilters(searchTerm: string, selectedStatus: string): void {
    this.filteredTodoList = this.todoService.filterTodoList(
      searchTerm,
      selectedStatus
    );
  }

  resetFilters(): void {
    this.filteredTodoList = [];
  }

  ngOnInit(): void {
    this.loadTodoList();
  }

  loadTodoList(): void {
    this.todoItems = this.todoService.getTodoList();
  }
}
