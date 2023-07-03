import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subject} from 'rxjs';
import { Devise } from 'src/app/models/devise';
import { DeviseService } from 'src/app/services/devise.service';

@Component({
  selector: 'app-devises',
  templateUrl: './devises.component.html',
  styleUrls: ['./devises.component.css']
})
export class DevisesComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  devises: Devise[] = []

  constructor(private deviseServe:DeviseService) { }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getAll() {
    this.deviseServe.getAllDevises().subscribe(res => {
      this.devises = res.data;
    }, (err: HttpErrorResponse) => {
      console.log(err);
      
    })
  }
}
