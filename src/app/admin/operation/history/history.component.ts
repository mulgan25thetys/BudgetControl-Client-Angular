import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operation } from 'src/app/models/operation';
import { OperationService } from '../../../services/operation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  url: string ='/operations/history'
  tableLabels: any = [{ name: 'category' }, { name: 'amount' }, { name: 'object' }, { name: 'description' }, { name: 'operation Date' }, { name: 'Files' }]
  tableName: string = 'operations'
  pager: any = {}
  deletedId: number = 0
  // button Icon
  deleteIcon =faTrash
  viewIcon =faEye
  //settings
  objectMaxString : number =25
  descriptionMaxString : number =45
  // Models
  operations: Operation[] = []
  operation = new Operation()
  // filter
  search: string =''
  numberPerPage: number = 50;
  // modal info
  modalType: string = ''
  modalTitle: string = ''
  modalAction: string = ''
  modalMessage: string = ''
  modalWithCancel: Boolean =false
  
  constructor(private route: ActivatedRoute, private router:Router,
    private opserve: OperationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x => this.getAll(x.page || 1))
  }

  getAll(page: number) {
    this.opserve.getOperations(page, this.numberPerPage, 'yes').subscribe(res => {
      this.pager = res.data.pager
      this.operations = res.data.pageOfDatas
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }
  getAllByValue(page: number) {
    this.opserve.getOperationsByValue(page, this.numberPerPage, this.search).subscribe(res => {
      this.pager = res.data.pager
      this.operations = res.data.pageOfDatas
    }, (err: HttpErrorResponse) => {
      console.log(err);
    })
  }

  delete(id: number) {
    this.deletedId = id
    this.opserve.getOperation(id).subscribe(res => {
      this.modalType = 'danger'
      this.modalAction = 'delete'
      this.modalTitle = 'Are you sure!'
      this.modalWithCancel = true
      this.modalMessage = 'Operation: ' + res.data.object + ' will be deleted!'
      $("#showModal").click()
    }, (err: HttpErrorResponse) => {
      this.toastr.info(err?.error?.message || err.statusText,'Delete operation')
    })
  }

  proceedToDelete(id: number) {
    this.opserve.deleteOperation(id).subscribe(res => {
      this.modalMessage = res?.message
      this.modalType = 'success'
      this.modalAction = 'confirm'
      this.modalTitle = 'Succeed'
      this.modalWithCancel = false
      $("#showModal").click()
    }, (err: HttpErrorResponse) => {
      this.modalMessage = err?.error?.message || err.statusText
      this.modalType = 'danger'
      this.modalAction = 'ok'
      this.modalTitle = 'Internal server error'
      $("#showModal").click()
    })
  }

  showByNumber() {
    this.getAll(1)
  }

  filterOperation() {
    this.getAllByValue(1)
  }

  onModalEmit(event: any) {
    if (event == 'delete') {
      this.proceedToDelete(this.deletedId)
    } else if (event == 'init') {
      this.ngOnInit()
    }
  }

  viewOperation(id: number) {
    this.router.navigate(['/operations/'+id])
  }

  getObjectContent(object: string) {
    return object.length > this.objectMaxString ? object.slice(0, this.objectMaxString)+'...': object
  }
  getDescriptionContent(description: string) {
    return description.length > this.descriptionMaxString ? description.slice(0, this.descriptionMaxString)+'...': description
  }
}
