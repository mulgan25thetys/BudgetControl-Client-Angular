import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pager: any;
  @Input() footerClass: string;
  @Input() currentUrl: any;
  @Input() showingEntries: Boolean;
  @Output() emitter = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

}
