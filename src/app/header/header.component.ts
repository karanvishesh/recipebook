import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() onViewUpdate  = new EventEmitter<boolean>();

  updateView(status: boolean) {
    this.onViewUpdate.emit(status);
  }
}
