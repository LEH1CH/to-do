import { Component } from '@angular/core';
import { TodoItem, TodoService } from '../todo.service';
import { LoginPageComponent } from '../login-page/login-page.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  todoItems: TodoItem[] = [];
  filteredTodoList: TodoItem[] = [];

  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private router: Router,
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
    // Загружаем список задач из JSON файла только если он пустой
    /* if (this.todoItems.length === 0) {
      this.loadTodoList();
    } */
    this.loadTodoList();
  }

  loadTodoList(): void {
    this.todoItems = this.todoService.getTodoList();
  }

  /* oadTodoList(): void {
    // Вызываем метод fetchTodoList() из TodoService для загрузки списка задач из JSON файла
    this.todoService.fetchTodoList().subscribe(
      (todoList: TodoItem[]) => {
        // Проверяем, что список задач пустой, и добавляем задачи только в этом случае
        if (this.todoItems.length === 0) {
          this.todoItems = todoList;
        }
      },
      (error) => {
        // Обработка ошибки загрузки списка задач из JSON файла
        console.error('Error loading todo list:', error);
      }
    );
  } */

  onAddTodo(newTodo: { title: string; description: string }): void {
    // Добавляем новую задачу в список задач
    this.todoService.addTodoItem(newTodo.title, newTodo.description);
    // Обновляем список задач
    this.loadTodoList();
  }

  onSearchFilters(filters: {
    searchTerm: string;
    selectedStatus: string;
  }): void {
    // Применяем полученные фильтры к списку задач
    this.applyFilters(filters.searchTerm, filters.selectedStatus);
  }

  logout(): void {
    this.loginPageComponent.logout(); // Вызываем метод logout() из LoginPageComponent
  }
}
