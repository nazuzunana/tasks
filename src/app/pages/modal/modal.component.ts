import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @ViewChild('modal', { read: ViewContainerRef })
  containerRef?: ViewContainerRef;

  constructor(private modalService: ModalService) {
  }

  openModal(): void {
    if (!this.containerRef) {
      console.error('Container ref for modal does not exist!');
      return;
    }

    this.modalService
    .openModal(this.containerRef, 'Modal was successfully opened');
  }

}
