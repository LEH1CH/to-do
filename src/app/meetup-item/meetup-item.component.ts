// meetup-item.component.ts
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Meetup } from '../models/meetup.model';
import { MeetupService } from '../meetup.service';
import { MeetupEditComponent } from '../meetup-edit/meetup-edit.component';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss'],
})
export class MeetupItemComponent implements OnInit {
  @Input()
  meetup!: Meetup;
  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalContainer!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  editMeetup(meetup: Meetup): void {
    if (!meetup) {
      console.error('Meetup object is undefined or null.');
      return;
    }
    const containerRef = this.modalContainer;
    const componentRef = this.modalService.open(MeetupEditComponent, containerRef);
    // Передаем митап в компонент MeetupEditComponent
    componentRef.instance.meetup = meetup;
  }
}
