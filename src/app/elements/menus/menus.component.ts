import { Component, OnInit } from '@angular/core';
import { faTachometer } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  isAdmin: Boolean = false;

  adminRoute: String = '/'

  menus: any = []

  constructor() { }

  ngOnInit(): void {

    this.menus = [
      { name: 'dashboard', icon: faTachometer, link: this.adminRoute + '/dashboard' },
      {
        name: 'operations', icon: faBookBookmark, link: this.adminRoute + '/operations',
        children: [
          { name: 'history', link: this.adminRoute + '/operations/history'},
          { name: 'new operation', link: this.adminRoute + '/operations/new'}
        ]
      },
      {
        name: 'economies', icon: faMoneyBillWave, link: this.adminRoute + '/economies',
        children: [
          { name: 'list', link: this.adminRoute + '/economies/list'},
          { name: 'new economy', link: this.adminRoute + '/economies/new'},
        ]
      },
      {
        name: 'settings', icon: faCog, link: this.adminRoute + '/settings',
        children: [
          { name: 'devises', link: this.adminRoute + '/settings/devises'},
        ]
      },
    ]
  }

}
