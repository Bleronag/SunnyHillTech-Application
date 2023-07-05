import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './Products.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Output() close = new EventEmitter();

  // Add any necessary properties and methods for the dialog component
}
