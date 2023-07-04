import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Devise } from 'src/app/models/devise';
import { DeviseService } from '../../../services/devise.service';
import { Region } from 'src/app/models/region';
import { HttpErrorResponse } from '@angular/common/http';
import { NgSelectConfig } from '@ng-select/ng-select';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-devises',
  templateUrl: './add-devises.component.html',
  styleUrls: ['./add-devises.component.css']
})
export class AddDevisesComponent implements OnInit{
  btnIsDesabled: Boolean;
  @Output() modalEmitter = new EventEmitter<any>()

  //Model
  devise = new Devise()
  regions: Region[] = []

  constructor(private deviseServe: DeviseService,private config: NgSelectConfig, private toastr:ToastrService) {
    this.config.notFoundText = 'Region not found';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.btnIsDesabled = true;
    this.devise.region = 'default'
    this.getAllRegions();
  }

  getAllRegions() {
    this.deviseServe.getAllRegions().subscribe(res => {

      this.regions = []
      res.data.forEach(region => {
        this.regions.push({ name: region.name, iso2: region.iso2 })
      })
      
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }

  onAddDevise(form: NgForm) {
    this.deviseServe.addDevise(this.devise).subscribe(res => {
      this.onInit(form)
    }, (err: HttpErrorResponse) => {
      if ( err.status == 409) {
        this.toastr.info('Data already exist please try another one!', 'Add devise!')
      } else {
        this.toastr.error(err?.error?.message || err.statusText, 'Add devise!')
      }
    })
  }

  onInit(form: NgForm) {
    form.reset()
    this.ngOnInit()
    $("#btn-close").click()
    this.modalEmitter.emit('init')
  }

  enableAddBtn(event: any) {
    this.btnIsDesabled = event === 'default' ? true : false;
  }
}