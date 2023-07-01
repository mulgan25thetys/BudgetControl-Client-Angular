import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/services/system/system.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  system_name: string =''
  constructor(private system_serve: SystemService) { }

  ngOnInit(): void {
    this.system_serve.get_system_info().subscribe(res => {
      
      this.system_name = res?.data?.name
      this.system_name = this.system_name.replace('-', ' ')
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }

}
