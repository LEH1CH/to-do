import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input() item!: TodoItem;

  constructor(private todoService: TodoService) {}

  onStatusChange(): void {
    this.todoService.changeTodoItemStatus(this.item.id, this.item.status);
  }

  onDelete(): void {
    console.log('Удаляем запись с id:', this.item.id);
    this.todoService.deleteTodoItem(this.item.id);
  }
}
