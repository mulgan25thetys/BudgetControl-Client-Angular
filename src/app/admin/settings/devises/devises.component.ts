import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Devise } from 'src/app/models/devise';
import { DeviseService } from 'src/app/services/devise.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-devises',
  templateUrl: './devises.component.html',
  styleUrls: ['./devises.component.css']
})
export class DevisesComponent implements OnInit {
  isLoaded: Boolean = false;
  // page infos
  url: string ='/settings/devises'
  // Datas
  tableName: string = 'devises'
  tableLabels: any = [{ name: "currency" }, { name: "region" }, { name: "default" }, { name: "createdAt" }]

  devises: Devise[] = []
  devise = new Devise()
  deletedId: number = 0
  pager: any = {}

  //Filter
  search: string =''
  numberPerPage: number = 10

  // modal details
  modalType: string = 'danger'
  modalName: string = 'modaldialog'
  modalMessage: string =''
  modalAction: string =''

  constructor(private deviseServe:DeviseService, private route:ActivatedRoute, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x => this.getAll(x.page || 1))
  }

  getAll(page:number) {
    this.isLoaded = false;
    this.deviseServe.getAllDevises(page, this.numberPerPage).subscribe(res => {      
      this.devises = res.data.pageOfDatas;
      this.pager = res.data.pager
      this.isLoaded = true
    }, (err: HttpErrorResponse) => {
      this.isLoaded = true
      console.log(err);
    })
  }

  filterDevise() {
    if (this.search.length > 0) {
      this.getAllByValue(1)
    } else {
      this.getAll(1)
    }
  }

  showByNumber() {
    this.getAll(1)
  }

  getAllByValue(page:number) {
    this.isLoaded = false;
    this.deviseServe.getAllDevisesByValues(page, this.numberPerPage, this.search).subscribe(res => {
      this.devises = res.data.pageOfDatas;
      this.pager = res.data.pager
      this.isLoaded = true
    }, (err: HttpErrorResponse) => {
      this.isLoaded = true
      console.log(err);
    })
  }

  setToDefault(id:number) {
    this.deviseServe.setDefault(id).subscribe(res => {
      this.ngOnInit()
      this.toastr.success(res?.message, 'Set Default Devise')
    }, (err:HttpErrorResponse) => {
      this.toastr.error(err?.error?.message || err.statusText, 'Set Default Devise')
    })
  }

  delete(id: number) {
    this.deletedId = id
    this.deviseServe.getOne(id).subscribe(res => {
      this.devise = res.data
      if (this.devise.Capitals.length > 0) {
        this.modalMessage = 'Your assets are contained in this currency, and deleting it will result in the loss of your data.\nSet a new default currency before proceeding, otherwise you run the risk of losing your data.'
        this.modalAction = 'delete'
          $("#showModal").click()
      } else {
        this.proceedTodelete(id)
      }
    }, (err: HttpErrorResponse) => {
      this.toastr.info(err?.error?.message || err.statusText, 'Find Devise')
    })
  }

  proceedTodelete(id:number) {
    this.deviseServe.deleteDevise(id).subscribe(res => {
      this.ngOnInit()
      this.toastr.success(res?.message, 'Delete Devise')
    }, (err:HttpErrorResponse) => {
      this.toastr.error(err?.error?.message || err.statusText, 'Delete Devise')
    })
  }

  onModalEmit(event: any) {
    if (event === 'delete') {
      this.proceedTodelete(this.deletedId)
    }
  }
  onEmitDevise(event: any) {
    if (event === 'init') {
      this.ngOnInit()
    }
  }
}