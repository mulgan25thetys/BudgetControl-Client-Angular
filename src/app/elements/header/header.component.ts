import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMobileMenus() {
    if ($('#page-top').hasClass('sidebar-toggled')) {
      $('#page-top').removeClass('sidebar-toggled')
      $('#accordionSidebar').removeClass('toggled')
    } else {
      $('#page-top').addClass('sidebar-toggled')
      $('#accordionSidebar').addClass('toggled')
    }
  }
}
