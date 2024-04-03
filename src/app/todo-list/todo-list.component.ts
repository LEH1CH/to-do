import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  @Input() todoItems: TodoItem[] = [];

}
