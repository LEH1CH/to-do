import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meetup } from '../models/meetup.model';

@Component({
  selector: 'app-meetup-edit',
  templateUrl: './meetup-edit.component.html',
  styleUrls: ['./meetup-edit.component.scss']
})
export class MeetupEditComponent {
  @Input() meetup!: Meetup; // Входной параметр, который принимает выбранный митап для редактирования
  @Output() saveChanges: EventEmitter<Meetup> = new EventEmitter<Meetup>(); // Событие для сохранения изменений

  // Метод для сохранения изменений митапа и передачи их назад в родительский компонент
  onSaveChanges(): void {
    if (!this.meetup) {
      console.error('Meetup object is undefined or null.');
      return;
    }
    // Проверяем, что свойства митапа не являются undefined или null перед использованием
    if (this.meetup.name && this.meetup.description && this.meetup.time && this.meetup.duration &&
        this.meetup.location && this.meetup.target_audience && this.meetup.need_to_know &&
        this.meetup.will_happen && this.meetup.reason_to_come) {
      this.saveChanges.emit(this.meetup);
    } else {
      console.error('Meetup object properties are undefined or null.');
    }
  }
}
