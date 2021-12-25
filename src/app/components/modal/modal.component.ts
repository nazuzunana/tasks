import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor() {
  }

  @Input() modalBody = '';
  @Output() closeModalEvent = new EventEmitter();

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
