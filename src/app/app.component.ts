import {
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  containerRef!: ViewContainerRef;

  openModal(): void {
    this.modalService
      .openModal(this.containerRef, 'Modal was successfully opened');
  }
}
