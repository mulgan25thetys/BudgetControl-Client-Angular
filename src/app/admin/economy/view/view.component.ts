import { Component, Input, OnInit } from '@angular/core';
import { Economie } from 'src/app/models/economie';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() economy = new Economie()

  ngOnInit(): void {
    
  }

}
