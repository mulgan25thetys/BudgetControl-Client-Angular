import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../services/capital.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Capital } from '../../models/capital';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentCapital = new Capital()

  constructor(private capitalServe:CapitalService) { }

  ngOnInit(): void {
    this.getCurrentCapital()
  }

  getCurrentCapital() {
    this.capitalServe.getAll().subscribe(res => {
      this.currentCapital = res.data[0]
    }, (err : HttpErrorResponse) => {
      console.log(err);
    })
  }
}
