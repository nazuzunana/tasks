import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalBody = '';
  @Output() closeModalEvent = new EventEmitter();

  constructor() {}

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
