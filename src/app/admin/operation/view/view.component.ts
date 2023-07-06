import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from 'src/app/services/operation.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Operation } from 'src/app/models/operation';
import * as $ from 'jquery';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  selectedFiles?: FileList;

  errorMessage: string =''
  hasError: Boolean = false;
  noReadyToUploadFile: Boolean = true;
  operation = new Operation()

  deleteIcon = faTrash
  
  constructor(private route: ActivatedRoute, private router:Router,
    private opServe: OperationService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.noReadyToUploadFile = true
    this.hasError = false
    this.route.params.subscribe(p => {
      if (p.id) {
        this.getOperation(p.id)
      } else {
        this.router.navigateByUrl('/operation')
      }
    })
  }

  getOperation(id:number) {
    this.opServe.getOperation(id).subscribe(res => {
      this.operation = res.data
    }, (err: HttpErrorResponse) => {
      this.toastr.error(err?.error?.message || err?.statusText, ' View Operation')
      this.router.navigateByUrl('/page-not-found')
    })
  }

  backToList() {
    this.router.navigateByUrl('/operations')
  }

  readFileEmiter(event) {
    this.selectedFiles = event?.selectedFiles
    this.noReadyToUploadFile = this.selectedFiles && !this.hasError? false :true
  }

  getFileMessage(event: any) {
    this.hasError = event.hasError
  }

  addFile(id: number) {
    const file: File | null = !this.selectedFiles ? null : this.selectedFiles.item(0);
     
        let currentFile = file;
        
        this.opServe.upload(currentFile,id).subscribe(
          (res) => {
            this.ngOnInit()
            $("#inputFile").val = null
        },
          (err: HttpErrorResponse) => {
          this.hasError = true
          sessionStorage.setItem('file_operation','not_upload')
          if (err?.error && err?.error.message) {
            this.errorMessage = err?.error.message;
          } else {
            this.errorMessage = 'Could not upload the file!';
          }
          currentFile = undefined;
        })
  }

  deleteFile(id: number) {
    this.opServe.deleteFile(id).subscribe(res => {
      this.ngOnInit()
      this.toastr.success(res.message, 'Delete Operation file')
    }, (err: HttpErrorResponse) => {
      this.toastr.error(err?.error?.message || err.statusText, 'Delete Operation file')
    })
  }
}
