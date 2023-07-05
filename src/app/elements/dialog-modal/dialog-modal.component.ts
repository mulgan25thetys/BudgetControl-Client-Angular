import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {

  @Input() message: string = ''
  @Input() title: string = ''
  @Input() action: string = ''
  @Input() type: string = ''
  @Input() withCancel: Boolean = false

  @Output() modalEmitter = new EventEmitter<any>()

  onActionEmit() {
    $("#btn-close").click()
    setTimeout(() => {
      switch (this.action) {
      case 'confirm':
        this.modalEmitter.emit('init')
        break;
      case 'delete':
        this.modalEmitter.emit('delete')
        break;
      default:
        this.modalEmitter.emit('init')
        break;
    }
    }, 500);
  }
}