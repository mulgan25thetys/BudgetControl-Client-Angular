import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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
      { name: 'home', icon: faHome, link: this.adminRoute + '/dashboard' },
      { name: 'categories', icon: faTag, link : this.adminRoute + '/categories'},
      { name: 'tags', icon: faTag, link : this.adminRoute + '/tags'},
      {
        name: 'blog', icon: faBookBookmark, link: this.adminRoute + '/blog',
        children: [
          { name: 'posts', link: this.adminRoute + '/blog/posts'},
          { name: 'new Post', link: this.adminRoute + '/blog/new-post'},
          { name: 'comments', link: this.adminRoute + '/blog/comments'},
        ]
      },
      {
        name: 'shop', icon: faCartShopping, link: this.adminRoute + '/shop',
        children: [
          { name: 'products', link: this.adminRoute + '/shop/products'},
          { name: 'new Product', link: this.adminRoute + '/shop/new-product'},
        ]
      },
    ]
  }

}
