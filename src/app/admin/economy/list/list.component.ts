import { Component, OnInit } from '@angular/core';
import { Economie } from 'src/app/models/economie';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EconomyService } from 'src/app/services/economy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tableName: string = 'economies'
  // page info 
  url: string = '/economies/my-economies'
  pager: any = {}
  deletedId: number = 0
  // Models
  tableLabels: any = [{ name: 'amount' }, { name: 'description' }, { name: 'createdAt' }]
  economies: Economie[] = []
  economy = new Economie()
  // filter
  numberPerPage: number = 10;
  search: string = ''
  // Button Icons 
  deleteIcon = faTrash
  viewIcon= faEye
  descriptionMaxSize = 100
  // modal info
  modalTarget: string = ''
  modalType: string = ''
  modalTitle: string = ''
  modalAction: string = ''
  modalMessage: string = ''
  modalWithCancel: Boolean = false
  
  constructor(private ecoServe: EconomyService, private router: Router, private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x => this.getAll(x.page || 1))
  }
  //get all economies
  getAll(page: number) {
    this.ecoServe.getEconomies(page, this.numberPerPage).subscribe(res => {
      this.pager = res.data.pager
      this.economies = res.data.pageOfDatas;
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }
  getAllByValue(page: number) {
    this.ecoServe.getEconomiesByValue(page, this.numberPerPage,this.search).subscribe(res => {
      this.pager = res.data.pager
      this.economies = res.data.pageOfDatas;
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }
  //delete an economy
  delete(id: number) {
    this.deletedId = id
    this.proceedToDelete(id)
  }
  proceedToDelete(id: number) {
    this.modalTarget = "modaldialog"
    setTimeout(() => {
      this.ecoServe.deleteEconomy(id).subscribe(res => {
        this.modalMessage = res?.message
        this.modalType = 'success'
        this.modalAction = 'confirm'
        this.modalTitle = 'Succeed'
        $("#showModal").click()
      }, (err: HttpErrorResponse) => {
        this.modalMessage = err?.error?.message || err.statusText
        this.modalType = 'danger'
        this.modalAction = 'ok'
        this.modalTitle = 'Internal server error'
        $("#showModal").click()
      })
    }, 300);
  }
  //view an economy and route to view page
  viewEconomy(id: number) {
    this.modalTarget = 'modalView'
    setTimeout(() => {
      this.economy = this.economies.find(eco => eco.id === id)
      if (this.economy) {
        $("#showModal").click()
      }
    }, 300);
  }
  //show economies by number of page
  showByNumber() {
    this.getAll(1)
  }
  //filter economies by search values
  filterEconomies() {
    this.getAllByValue(1)
  }

  onModalEmit(event: any) {
    if (event == 'delete') {
      this.proceedToDelete(this.deletedId)
    } else if (event == 'init') {
      this.ngOnInit()
    }
  }
  //slice economy's description size if it to long
  getDescription(description: string) {
    return description.length > this.descriptionMaxSize ? description.slice(0, this.descriptionMaxSize)+'...' : description;
  }
}