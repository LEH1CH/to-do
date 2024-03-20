import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoItem, TodoService } from '../todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent implements OnInit {
  todoForm!: FormGroup; // Объявляем форму FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    // Создаем форму с двумя полями: title и description
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  // Метод для добавления задачи
  onSubmit(): void {
    if (this.todoForm.valid) {
      // Проверяем, что форма валидна
      const { title, description } = this.todoForm.value;
      this.todoService.addTodoItem(title, description); // Добавляем задачу
      this.todoForm.reset(); // Очищаем форму после отправки
    }
  }
}
