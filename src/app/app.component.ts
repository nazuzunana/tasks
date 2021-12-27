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
  @ViewChild('modal', { read: ViewContainerRef })
  containerRef!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  openModal(): void {
    this.modalService
      .openModal(this.containerRef, 'Modal was successfully opened');
  }
}
