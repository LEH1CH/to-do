import { Injectable } from '@angular/core';
import { TodoItem, TodoStatus } from './models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoList: TodoItem[] = [];
  private filteredTodoList: TodoItem[] = [];
  public isFiltering: boolean = false;
  constructor() {}

  filterTodoList(searchTerm: string, selectedStatus: string): TodoItem[] {
    let filteredList = this.todoList;

    // Применяем фильтр по поисковому запросу
    if (searchTerm) {
      filteredList = filteredList.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Применяем фильтр по статусу
    if (selectedStatus) {
      filteredList = filteredList.filter(
        (item) => item.status === selectedStatus
      );
    }

    return filteredList;
  }

  // Метод для получения списка всех задач
  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  // Метод для добавления новой записи в to-do лист
  addTodoItem(
    title: string,
    description: string,
    status: TodoStatus = 'normal'
  ): void {
    const id = this.todoList.length + 1; // Просто увеличиваем длину массива на 1 для уникального ID
    const newItem = new TodoItem(id, title, description, status);
    this.todoList.push(newItem);
  }

  // Метод для удаления записи из to-do листа по ID
  deleteTodoItem(id: number): void {
    const index = this.todoList.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }

  // Метод для изменения статуса существующей записи по ID
  changeTodoItemStatus(id: number, newStatus: TodoStatus): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.status = newStatus;
    }
  }
}
export { TodoItem };
