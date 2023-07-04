import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {

  @Input() message: string = ''
  @Input() action: string = ''
  @Input() type: string = ''
  @Input() withCancel: Boolean = false

  @Output() modalEmitter = new EventEmitter<any>()

  onActionEmit() {
    this.modalEmitter.emit('delete')
  }
}