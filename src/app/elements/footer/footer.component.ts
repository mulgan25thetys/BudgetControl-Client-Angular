import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system/system.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: number = 1970
  system_name: string =''

  constructor(private system_serve:SystemService) { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.system_serve.get_system_info().subscribe(res => {
      
      this.system_name = res?.data?.name
      this.system_name = this.system_name.replace('-', ' ')
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }

}
