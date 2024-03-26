import { Component } from '@angular/core';
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

  onAddTodo(newTodo: { title: string, description: string }): void {
    // Добавляем новую задачу в список задач
    this.todoService.addTodoItem(newTodo.title, newTodo.description);
    // Обновляем список задач
    this.loadTodoList();
  }

  onSearchFilters(filters: { searchTerm: string, selectedStatus: string }): void {
    // Применяем полученные фильтры к списку задач
    this.applyFilters(filters.searchTerm, filters.selectedStatus);
  }
}
