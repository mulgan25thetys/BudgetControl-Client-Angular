import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent implements OnInit {
  @Input() pagePretitle : string = 'overview'
  @Input() pageTitle: string = 'dashboard'
  @Input() itemModule: string = 'module'
  @Input() withAddingModuleButton: Boolean = false

  @Input() withAddingModuleButtonByLink: Boolean = false
  @Input() addingLink: string
  
  constructor() { }

  ngOnInit(): void {
  }

}
