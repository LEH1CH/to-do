import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoItem, TodoService } from '../todo.service';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent {
  todoItems: TodoItem[] = [];
  filteredTodoList: TodoItem[] = [];

  constructor(
    private todoService: TodoService,
    private loginPageComponent: LoginPageComponent
  ) {}

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

  onAddTodo(newTodo: { title: string; description: string }): void {
    // Добавляем новую задачу в список задач
    this.todoService.addTodoItem(newTodo.title, newTodo.description);
    // Обновляем список задач
    this.todoItems = this.todoService.getTodoList();
    this.loadTodoList();
  }

  onSearchFilters(filters: {
    searchTerm: string;
    selectedStatus: string;
  }): void {
    // Применяем полученные фильтры к списку задач
    this.applyFilters(filters.searchTerm, filters.selectedStatus);
  }

  loadTodoList(): void {
    // Загружаем задачи из JSON файла и добавляем их в список задач
    this.todoService.loadTodoListFromJson().subscribe(
      (todoListFromJson: TodoItem[]) => {
        this.todoService.addTodoItemsFromJson(todoListFromJson);
        this.todoItems = this.todoService.getTodoList();
        this.loadTodoList();
      },
      (error) => {
        console.error('Error loading todo list from JSON:', error);
      }
    );
  }

  logout(): void {
    this.loginPageComponent.logout(); // Вызываем метод logout() из LoginPageComponent
  }
}
